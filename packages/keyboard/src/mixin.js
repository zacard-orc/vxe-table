import XEUtils from 'xe-utils/methods/xe-utils'
import { DomTools } from '../../tools'

const browse = DomTools.browse

// todo xeutils extend max node
XEUtils.getMaxNode = function () {
  const bb = 1
}

function getTargetOffset (targer, container) {
  let offsetTop = 0
  let offsetLeft = 0
  const triggerCheckboxLabel = !browse.firefox && DomTools.hasClass(targer, 'vxe-checkbox--label')
  if (triggerCheckboxLabel) {
    const checkboxLabelStyle = getComputedStyle(targer)
    offsetTop -= XEUtils.toNumber(checkboxLabelStyle.paddingTop)
    offsetLeft -= XEUtils.toNumber(checkboxLabelStyle.paddingLeft)
  }
  while (targer && targer !== container) {
    offsetTop += targer.offsetTop
    offsetLeft += targer.offsetLeft
    targer = targer.offsetParent
    if (triggerCheckboxLabel) {
      const checkboxStyle = getComputedStyle(targer)
      offsetTop -= XEUtils.toNumber(checkboxStyle.paddingTop)
      offsetLeft -= XEUtils.toNumber(checkboxStyle.paddingLeft)
    }
  }
  return { offsetTop, offsetLeft }
}

function getCheckboxRangeResult (_vm, params, targetTrElem, moveRange) {
  let countHeight = 0
  let rangeRows = []
  const isDown = moveRange > 0
  const moveSize = moveRange > 0 ? moveRange : (Math.abs(moveRange) + targetTrElem.offsetHeight)
  const { afterFullData, scrollYStore, scrollYLoad } = _vm
  if (scrollYLoad) {
    const _rowIndex = _vm._getRowIndex(params.row)
    if (isDown) {
      rangeRows = afterFullData.slice(_rowIndex, _rowIndex + Math.ceil(moveSize / scrollYStore.rowHeight))
    } else {
      rangeRows = afterFullData.slice(_rowIndex - Math.floor(moveSize / scrollYStore.rowHeight) + 1, _rowIndex + 1)
    }
  } else {
    const siblingProp = isDown ? 'next' : 'previous'
    while (targetTrElem && countHeight < moveSize) {
      rangeRows.push(_vm.getRowNode(targetTrElem).item)
      countHeight += targetTrElem.offsetHeight
      targetTrElem = targetTrElem[`${siblingProp}ElementSibling`]
    }
  }
  return rangeRows
}

export default {
  methods: {
    // 处理 Tab 键移动
    moveTabSelected (args, isLeft, evnt) {
      const { afterFullData, visibleColumn, editConfig, editOpts } = this
      let targetRow
      let targetRowIndex
      let targetColumnIndex
      const params = Object.assign({}, args)
      const _rowIndex = this._getRowIndex(params.row)
      const _columnIndex = this._getColumnIndex(params.column)
      evnt.preventDefault()
      if (isLeft) {
        // 向左
        if (_columnIndex <= 0) {
          // 如果已经是第一列，则移动到上一行
          if (_rowIndex > 0) {
            targetRowIndex = _rowIndex - 1
            targetRow = afterFullData[targetRowIndex]
            targetColumnIndex = visibleColumn.length - 1
          }
        } else {
          targetColumnIndex = _columnIndex - 1
        }
      } else {
        if (_columnIndex >= visibleColumn.length - 1) {
          // 如果已经是第一列，则移动到上一行
          if (_rowIndex < afterFullData.length - 1) {
            targetRowIndex = _rowIndex + 1
            targetRow = afterFullData[targetRowIndex]
            targetColumnIndex = 0
          }
        } else {
          targetColumnIndex = _columnIndex + 1
        }
      }
      const targetColumn = visibleColumn[targetColumnIndex]
      if (targetColumn) {
        if (targetRow) {
          params.rowIndex = targetRowIndex
          params.row = targetRow
        } else {
          params.rowIndex = _rowIndex
        }
        params.columnIndex = targetColumnIndex
        params.column = targetColumn
        params.cell = DomTools.getCell(this, params)
        if (editConfig) {
          if (editOpts.trigger === 'click' || editOpts.trigger === 'dblclick') {
            if (editOpts.mode === 'row') {
              this.handleActived(params, evnt)
            } else {
              this.scrollToRow(params.row, params.column)
                .then(() => this.handleSelected(params, evnt))
            }
          }
        } else {
          this.scrollToRow(params.row, params.column)
            .then(() => this.handleSelected(params, evnt))
        }
      }
    },
    // 处理当前行方向键移动
    moveCurrentRow (isUpArrow, isDwArrow, evnt) {
      const { currentRow, treeConfig, treeOpts, afterFullData, highlightCurrentRow } = this
      let targetRow
      evnt.preventDefault()
      if (currentRow) {
        if (treeConfig) {
          const { index, items } = XEUtils.findTree(afterFullData, item => item === currentRow, treeOpts)
          if (isUpArrow && index > 0) {
            targetRow = items[index - 1]
          } else if (isDwArrow && index < items.length - 1) {
            targetRow = items[index + 1]
          }
        } else {
          const _rowIndex = this._getRowIndex(currentRow)
          if (isUpArrow && _rowIndex > 0) {
            targetRow = afterFullData[_rowIndex - 1]
          } else if (isDwArrow && _rowIndex < afterFullData.length - 1) {
            targetRow = afterFullData[_rowIndex + 1]
          }
        }
      } else {
        targetRow = afterFullData[0]
      }
      if (targetRow) {
        const params = { $table: this, row: targetRow }
        this.scrollToRow(targetRow)
          .then(() => this.triggerCurrentRowEvent(evnt, params))
      }
    },
    // 处理可编辑方向键移动
    moveSelected (args, isLeftArrow, isUpArrow, isRightArrow, isDwArrow, evnt) {
      const {
        afterFullData, visibleColumn,
        currentRow, treeConfig, treeOpts, afterFlat
      } = this
      const params = Object.assign({}, args)
      const _rowIndex = this._getRowIndex(params.row)
      const _columnIndex = this._getColumnIndex(params.column)
      evnt.preventDefault()

      // if (isUpArrow && _rowIndex > 0) {
      if (isUpArrow) {
        // 移动到上一行

        if (treeConfig) {
          let upLim = 0
          let downLim = 999

          if (treeConfig.navColumn) {
            upLim = treeConfig.navColumn[0]
            downLim = treeConfig.navColumn[1]
          }

          if (
            _columnIndex >= upLim &&
            _columnIndex <= downLim
          ) {
            const { index, items } = XEUtils.findTree(
              this.afterFullData,
              item => item === currentRow, treeOpts)

            if (index === 0) {
              // 折叠
              const { parent: parentRow } = XEUtils.findTree(this.afterFullData, item => item === currentRow, treeOpts)
              if (parentRow) {
                params.$table = this
                params.row = parentRow
                this.setTreeExpand(parentRow, false)
                  .then(() => this.scrollToRow(parentRow))
                  .then(() => {
                    this.triggerCurrentRowEvent(evnt, params)
                    params.cell = DomTools.getCell(this, params)
                    this.handleSelected(params, evnt)
                  })
              }
            } else {
              const prevRow = items[index - 1]
              if (prevRow) {
                params.$table = this
                params.row = prevRow

                this.scrollToRow(prevRow)
                  .then(() => {
                    this.triggerCurrentRowEvent(evnt, params)
                    params.cell = DomTools.getCell(this, params)
                    this.handleSelected(params, evnt)
                  })
              }
            }
          }
          return
        }

        params.rowIndex = _rowIndex - 1
        params.row = afterFullData[params.rowIndex]
      } else if (isDwArrow && _rowIndex < afterFullData.length - 1) {
        // 移动到下一行
        if (treeConfig) {
          let upLim = 0
          let downLim = 999

          if (treeConfig.navColumn) {
            upLim = treeConfig.navColumn[0]
            downLim = treeConfig.navColumn[1]
          }

          if (
            _columnIndex >= upLim &&
            _columnIndex <= downLim
          ) {
            const childrens = currentRow[treeOpts.children]
            if (childrens && childrens.length) {
              evnt.preventDefault()
              const targetRow = childrens[0]

              params.$table = this
              params.row = targetRow

              this.setTreeExpand(currentRow, true)
                .then(() => this.scrollToRow(targetRow))
                .then(() => {
                  this.triggerCurrentRowEvent(evnt, params)
                  params.cell = DomTools.getCell(this, params)
                  this.handleSelected(params, evnt)
                })
              return
            } else {
              const curIdx = afterFlat.findIndex((el) => el === currentRow._XID)
              if (curIdx < afterFlat.length - 1) {
                const { item } = XEUtils.findTree(
                  this.afterFullData,
                  item => item._XID === afterFlat[curIdx + 1], treeOpts)

                params.$table = this
                params.row = item

                this.scrollToRow(item)
                  .then(() => {
                    this.triggerCurrentRowEvent(evnt, params)
                    params.cell = DomTools.getCell(this, params)
                    this.handleSelected(params, evnt)
                  })
                return
              }
            }
          }
          return
        }

        params.rowIndex = _rowIndex + 1
        params.row = afterFullData[params.rowIndex]
      } else if (isLeftArrow && _columnIndex) {
        // 移动到左侧单元格
        params.columnIndex = _columnIndex - 1
        params.column = visibleColumn[params.columnIndex]
      } else if (isRightArrow && _columnIndex < visibleColumn.length - 1) {
        // 移动到右侧单元格
        params.columnIndex = _columnIndex + 1
        params.column = visibleColumn[params.columnIndex]
      }

      console.log('cell mode to move =>')
      this.scrollToRow(params.row, params.column).then(() => {
        this.triggerCurrentRowEvent(evnt, params)
        params.cell = DomTools.getCell(this, params)
        this.handleSelected(params, evnt)
      })
    },
    /**
     * 单元格按下事件
     */
    triggerCellMousedownEvent (evnt, params) {
      const { editConfig, editOpts, handleSelected, checkboxOpts, mouseOpts } = this
      const { button } = evnt
      const cell = evnt.currentTarget
      const isLeftBtn = button === 0
      params.cell = cell
      if (checkboxOpts.range) {
        if (isLeftBtn) {
          this.handleCheckboxRangeEvent(evnt, params)
        }
      }
      if (mouseOpts.selected) {
        if (!editConfig || editOpts.mode === 'cell') {
          handleSelected(params, evnt)
        }
      }
      this.focus()
      this.closeFilter()
      this.closeMenu()
    },
    handleCheckboxRangeEvent (evnt, params) {
      const { column, cell } = params
      if (column.type === 'checkbox') {
        const { elemStore } = this
        const disX = evnt.clientX
        const disY = evnt.clientY
        const bodyWrapperElem = elemStore[`${column.fixed || 'main'}-body-wrapper`] || elemStore['main-body-wrapper']
        const checkboxRangeElem = elemStore[`${column.fixed || 'main'}-body-checkRange`] || elemStore['main-body-checkRange']
        const domMousemove = document.onmousemove
        const domMouseup = document.onmouseup
        const trElem = cell.parentNode
        const selectRecords = this.getCheckboxRecords()
        let lastRangeRows = []
        const marginSize = 1
        const offsetRest = getTargetOffset(evnt.target, bodyWrapperElem)
        const startTop = offsetRest.offsetTop + evnt.offsetY
        const startLet = offsetRest.offsetLeft + evnt.offsetX
        const startScrollTop = bodyWrapperElem.scrollTop
        const rowHeight = trElem.offsetHeight
        let mouseScrollTimeout = null
        let isMouseScrollDown = false
        let mouseScrollSpaceSize = 1
        const triggerEvent = (type, evnt) => {
          this.emitEvent(`checkbox-range-${type}`, { records: this.getCheckboxRecords(), reserves: this.getCheckboxReserveRecords() }, evnt)
        }
        // 处理复选框选中
        const handleChecked = (evnt) => {
          const { clientX, clientY } = evnt
          const offsetLeft = clientX - disX
          const offsetTop = clientY - disY + (bodyWrapperElem.scrollTop - startScrollTop)
          let rangeHeight = Math.abs(offsetTop)
          let rangeWidth = Math.abs(offsetLeft)
          let rangeTop = startTop
          let rangeLeft = startLet
          if (offsetTop < marginSize) {
            // 向上
            rangeTop += offsetTop
            if (rangeTop < marginSize) {
              rangeTop = marginSize
              rangeHeight = startTop
            }
          } else {
            // 向下
            rangeHeight = Math.min(rangeHeight, bodyWrapperElem.scrollHeight - startTop - marginSize)
          }
          if (offsetLeft < marginSize) {
            // 向左
            rangeLeft += offsetLeft
            if (rangeWidth > startLet) {
              rangeLeft = marginSize
              rangeWidth = startLet
            }
          } else {
            // 向右
            rangeWidth = Math.min(rangeWidth, bodyWrapperElem.clientWidth - startLet - marginSize)
          }
          checkboxRangeElem.style.height = `${rangeHeight}px`
          checkboxRangeElem.style.width = `${rangeWidth}px`
          checkboxRangeElem.style.left = `${rangeLeft}px`
          checkboxRangeElem.style.top = `${rangeTop}px`
          checkboxRangeElem.style.display = 'block'
          const rangeRows = getCheckboxRangeResult(this, params, trElem, offsetTop < marginSize ? -rangeHeight : rangeHeight)
          // 至少滑动 10px 才能有效匹配
          if (rangeHeight > 10 && rangeRows.length !== lastRangeRows.length) {
            lastRangeRows = rangeRows
            if (evnt.ctrlKey) {
              rangeRows.forEach(row => {
                this.handleSelectRow({ row }, selectRecords.indexOf(row) === -1)
              })
            } else {
              this.setAllCheckboxRow(false)
              this.setCheckboxRow(rangeRows, true)
            }
            triggerEvent('change', evnt)
          }
        }
        // 停止鼠标滚动
        const stopMouseScroll = () => {
          clearTimeout(mouseScrollTimeout)
          mouseScrollTimeout = null
        }
        // 开始鼠标滚动
        const startMouseScroll = (evnt) => {
          stopMouseScroll()
          mouseScrollTimeout = setTimeout(() => {
            if (mouseScrollTimeout) {
              const { scrollLeft, scrollTop, clientHeight, scrollHeight } = bodyWrapperElem
              const topSize = Math.ceil(mouseScrollSpaceSize * 50 / rowHeight)
              if (isMouseScrollDown) {
                if (scrollTop + clientHeight < scrollHeight) {
                  this.scrollTo(scrollLeft, scrollTop + topSize)
                  startMouseScroll(evnt)
                  handleChecked(evnt)
                } else {
                  stopMouseScroll()
                }
              } else {
                if (scrollTop) {
                  this.scrollTo(scrollLeft, scrollTop - topSize)
                  startMouseScroll(evnt)
                  handleChecked(evnt)
                } else {
                  stopMouseScroll()
                }
              }
            }
          }, 50)
        }
        document.onmousemove = evnt => {
          evnt.preventDefault()
          evnt.stopPropagation()
          const { clientY } = evnt
          const { boundingTop } = DomTools.getAbsolutePos(bodyWrapperElem)
          // 如果超过可视区，触发滚动
          if (clientY < boundingTop) {
            isMouseScrollDown = false
            mouseScrollSpaceSize = boundingTop - clientY
            if (!mouseScrollTimeout) {
              startMouseScroll(evnt)
            }
          } else if (clientY > boundingTop + bodyWrapperElem.clientHeight) {
            isMouseScrollDown = true
            mouseScrollSpaceSize = clientY - boundingTop - bodyWrapperElem.clientHeight
            if (!mouseScrollTimeout) {
              startMouseScroll(evnt)
            }
          } else if (mouseScrollTimeout) {
            stopMouseScroll()
          }
          handleChecked(evnt)
        }
        document.onmouseup = (evnt) => {
          stopMouseScroll()
          checkboxRangeElem.removeAttribute('style')
          document.onmousemove = domMousemove
          document.onmouseup = domMouseup
          triggerEvent('end', evnt)
        }
        triggerEvent('start', evnt)
      }
    }
  }
}
