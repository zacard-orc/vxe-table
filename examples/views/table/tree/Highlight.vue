<template>
  <div>
    <p class="tip">
      键盘移动高亮行，设置 <table-api-link prop="keyboard-config"/>={isArrow: true, isEnter: true} 启用方向键功能<br>
      <span class="red">(注：树结构不支持大量数据，如果数据量超过 500 条，请谨慎使用！)</span>
    </p>

    <vxe-table
      highlight-current-row
      :data="tableData"
      :tree-config="{children: 'children', navColumn: [2,2]}"
      :mouse-config="{selected: true}"
      :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true}"
      :edit-config="{trigger: 'dblclick', mode: 'cell'}"
      :checkbox-config="{range: true}"
    >
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column type="checkbox" width="60"></vxe-table-column>
      <vxe-table-column field="ljmc" title="零件名称" tree-node></vxe-table-column>
      <vxe-table-column field="cl" title="材料" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="gy" title="工艺" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="djzl" title="单件重量" :edit-render="{name: 'input'}"></vxe-table-column>
<!--      <vxe-table-column field="name" title="Name" tree-node></vxe-table-column>-->
<!--      <vxe-table-column field="size" title="Size"></vxe-table-column>-->
<!--      <vxe-table-column field="type" title="Type"></vxe-table-column>-->
<!--      <vxe-table-column field="date" title="Date"></vxe-table-column>-->
    </vxe-table>

    <pre>
      <code>
        | Arrow Up ↑ | 移动到高亮行的上一行 |
        | Arrow Down ↓ | 移动到高亮行的下一行 |
        | Enter | 展开节点，进入子节点 |
        | Backspace | 关闭节点，返回到父节点 |
      </code>
    </pre>

<!--    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>-->

<!--    <pre>-->
<!--      <code class="xml">{{ demoCodes[0] }}</code>-->
<!--      <code class="javascript">{{ demoCodes[1] }}</code>-->
<!--    </pre>-->
  </div>
</template>

<script>
import hljs from 'highlight.js'
import XEUtils from 'xe-utils'

export default {
  data () {
    return {
      tableData: [],
      selectRow: null,
      demoCodes: []
    }
  },
  created () {
    // this.tableData = XEUtils.clone(window.MOCK_TREE_DATA_LIST, true)
    this.tableData = [
      {
        // id: 1000,
        ljmc: '新风口',
        cl: ' 金属',
        gy: '铰链冲压计算公式',
        djzl: '1.5',
        children: [
          {
            // id: 1100,
            // parentId: 1000,
            ljmc: '新风口密封条',
            cl: ' 金属',
            gy: '铰链冲压计算公式',
            djzl: '1.5'
          }, {
            // id: 1200,
            // parentId: 1000,
            ljmc: '螺钉-内外循环内门执行器a',
            cl: ' 金属',
            gy: '铰链冲压计算公式',
            djzl: '1.5',
            children: [
              {
                ljmc: '螺钉-内外循环内门执行器aa',
                cl: ' 金属',
                gy: '铰链冲压计算公式',
                djzl: '1.5'
              },
              {
                ljmc: '螺钉-内外循环内门执行器aa',
                cl: ' 金属',
                gy: '铰链冲压计算公式',
                djzl: '1.5'
              }
            ]
          },
          {
            // id: 1100,
            // parentId: 1000,
            ljmc: '新风口密封条world',
            cl: ' 金属',
            gy: '铰链冲压计算公式',
            djzl: '1.5'
          }
        ]
      },
      {
        // id: 2000,
        ljmc: '螺钉-新风口到鼓机单元',
        cl: ' 金属',
        gy: '铰链冲压计算公式',
        djzl: '1.5'
      },
      {
        // id: 3000,
        ljmc: '新风口',
        cl: ' 金属',
        gy: '铰链冲压计算公式',
        djzl: '1.5',
        children: [
          {
            ljmc: '新风口密封条',
            cl: ' 金属',
            gy: '铰链冲压计算公式',
            djzl: '1.5',
            children: [{
              ljmc: 'aaa',
              cl: ' bb',
              gy: '铰链冲压计算公式',
              djzl: '1.5'
            },
            {
              ljmc: 'bbbb',
              cl: ' aa',
              gy: '铰链冲压计算公式',
              djzl: '1.5'
            }
            ]
          }, {
            ljmc: '螺钉-内外循环内门执行器b',
            cl: ' 金属',
            gy: '铰链冲压计算公式',
            djzl: '1.5',
            children: [
              {
                ljmc: '螺钉-内外循环内门执行器bb',
                cl: ' 金属',
                gy: '铰链冲压计算公式',
                djzl: '1.5'
              }, {
                ljmc: '螺钉-内外循环内门执行器bb',
                cl: ' 金属',
                gy: '铰链冲压计算公式',
                djzl: '1.5'
              }, {
                ljmc: '螺钉-内外循环内门执行器bb',
                cl: ' 金属',
                gy: '铰链冲压计算公式',
                djzl: '1.5',
                children: [
                  {
                    ljmc: '螺钉-内外循环内门执行器bbb',
                    cl: ' 金属',
                    gy: '铰链冲压计算公式',
                    djzl: '1.5',
                    children: [
                      {
                        ljmc: '螺钉-内外循环内门执行器bbbb',
                        cl: ' 金属',
                        gy: '铰链冲压计算公式',
                        djzl: '1.5'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            ljmc: '螺钉-123内外循2环内门执行器z',
            cl: ' 金属',
            gy: '铰链冲压计算公式',
            djzl: '1.5',
            children: [
              {
                ljmc: '螺钉-123内外循2环内门执行器zz',
                cl: ' 金属',
                gy: '铰链冲压计算公式',
                djzl: '1.5'
              }, {
                ljmc: '螺钉-123内外循2环内门执行器zz',
                cl: ' 金属',
                gy: '铰链冲压计算公式',
                djzl: '1.5',
                children: [
                  {
                    ljmc: '螺钉-123内外循2环内门执行器zzz',
                    cl: ' 金属',
                    gy: '铰链冲压计算公式',
                    djzl: '1.5',
                    children: [{
                      ljmc: '螺钉-123内外循2环内门执行器zzzz',
                      cl: ' 金属',
                      gy: '铰链冲压计算公式',
                      djzl: '1.5'
                    }]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        // id: 4000,
        ljmc: '新风单元及蒸发器单元',
        cl: ' 塑料',
        gy: '铰链冲压计算公式',
        djzl: '1.5'
      },
      {
        // id: 5000,
        ljmc: '新风单元及蒸发器单元',
        cl: ' 塑料',
        gy: '铰链冲压计算公式',
        djzl: '1.5'
      }
    ]
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
