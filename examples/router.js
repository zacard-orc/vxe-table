import Vue from 'vue'
import Router from 'vue-router'

import StartInstall from './views/table/start/Install.vue'
import StartUse from './views/table/start/Use.vue'
import StartIcons from './views/table/start/Icons.vue'
import StartGlobal from './views/table/start/Global.vue'
import StartTheme from './views/table/start/Theme.vue'
import StartI18n from './views/table/start/I18n.vue'

import RendererAPI from './views/table/renderer/API.vue'
import RendererFilter from './views/table/renderer/Filter.vue'
import RendererDefault from './views/table/renderer/Default.vue'
import RendererEdit from './views/table/renderer/Edit.vue'
import RendererExpand from './views/table/renderer/Expand.vue'
import RendererToolbar from './views/table/renderer/Toolbar.vue'
import RendererForm from './views/table/renderer/Form.vue'
import RendererEmpty from './views/table/renderer/Empty.vue'

import CommandsAPI from './views/table/commands/API.vue'
import MenusAPI from './views/table/menus/API.vue'
import InterceptorAPI from './views/table/interceptor/API.vue'
import FormatsAPI from './views/table/formats/API.vue'

import TableBasic from './views/table/base/Basic.vue'
import TableSize from './views/table/base/Size.vue'
import TableWidth from './views/table/base/Width.vue'
import TableOverflow from './views/table/base/Overflow.vue'
import TableTooltip from './views/table/base/Tooltip.vue'
import TableStripe from './views/table/base/Stripe.vue'
import TableBorder from './views/table/base/Border.vue'
import TableRound from './views/table/base/Round.vue'
import TableStyle from './views/table/base/Style.vue'
import TableDynamicStyle from './views/table/base/DynamicStyle.vue'
import TableScrollStyle from './views/table/base/ScrollStyle.vue'
import TableHeader from './views/table/base/Header.vue'
import TableHeaderHighlight from './views/table/base/HeaderHighlight.vue'
import TableResizable from './views/table/base/Resizable.vue'
import TableMaxHeight from './views/table/base/MaxHeight.vue'
import TableHeight from './views/table/base/Height.vue'
import TableAutoHeight from './views/table/base/AutoHeight.vue'
import TableFixed from './views/table/base/Fixed.vue'
import TableFixedFull from './views/table/base/FixedFull.vue'
import TableGroup from './views/table/base/Group.vue'
import TableSeq from './views/table/base/Seq.vue'
import TableCurrent from './views/table/base/Current.vue'
import TableRadio from './views/table/base/Radio.vue'
import TableSelection from './views/table/base/Selection.vue'
import TableSort from './views/table/base/Sort.vue'
import TableFilter from './views/table/base/Filter.vue'
import TableEmpty from './views/table/base/Empty.vue'
import TableLoading from './views/table/base/Loading.vue'
import TableFormat from './views/table/base/Format.vue'
import TableData from './views/table/base/Data.vue'
import TableHTML from './views/table/base/HTML.vue'
import TableFull from './views/table/base/Full.vue'

import TableEvent from './views/table/advanced/Event.vue'
import TableTemplate from './views/table/advanced/Template.vue'
import TableDynamic from './views/table/advanced/Dynamic.vue'
import TableSortIcon from './views/table/advanced/SortIcon.vue'
import TableCustomSort from './views/table/advanced/CustomSort.vue'
import TableManualFilter from './views/table/advanced/ManualFilter.vue'
import TableFilterIcon from './views/table/advanced/FilterIcon.vue'
import TableSpan from './views/table/advanced/Span.vue'
import TableSpanRow from './views/table/advanced/SpanRow.vue'
import TableMergeCell from './views/table/advanced/MergeCell'
import TableFooter from './views/table/advanced/Footer.vue'
import TableFooterSpan from './views/table/advanced/FooterSpan.vue'
import TableFooterMaxHeight from './views/table/advanced/MaxHeight.vue'
import TableImport from './views/table/advanced/Import.vue'
import TableExport from './views/table/advanced/Export.vue'
import TablePrint from './views/table/advanced/Print.vue'
import TableFixedType from './views/table/advanced/FixedType.vue'
import TableMenu from './views/table/advanced/Menu.vue'
import TableMenuPrivilege from './views/table/advanced/MenuPrivilege.vue'
import TableExpand from './views/table/advanced/Expand.vue'
import TableExpandIcon from './views/table/advanced/ExpandIcon.vue'
import TableExpandLazy from './views/table/advanced/ExpandLazy.vue'
import TableExpandAccordion from './views/table/advanced/ExpandAccordion.vue'
import TableSearch from './views/table/advanced/Search.vue'
import TableGroupBy from './views/table/advanced/GroupBy.vue'
import TableDetails from './views/table/advanced/Details.vue'
import TablePopupEdit from './views/table/advanced/PopupEdit.vue'
import Toolbar from './views/table/advanced/Toolbar.vue'
import TableCustom from './views/table/advanced/Custom.vue'
import TableCustomStorage from './views/table/advanced/CustomStorage.vue'
import TableCustomlWidthStorage from './views/table/advanced/CustomlWidthStorage.vue'
import TableForm from './views/table/advanced/Form.vue'
import TablePage from './views/table/advanced/Page.vue'
import TablePageIcon from './views/table/advanced/PageIcon.vue'
import TableHighlight from './views/table/advanced/Highlight.vue'
import TableRangeSelect from './views/table/advanced/RangeSelect.vue'
import TableTabs from './views/table/advanced/Tabs.vue'
import TableKeepAlives from './views/table/advanced/KeepAlives.vue'
import TableKeepAliveTable1 from './views/table/advanced/keepAlives/Table1.vue'
import TableKeepAliveTable2 from './views/table/advanced/keepAlives/Table2.vue'
import TableKeepAliveTable3 from './views/table/advanced/keepAlives/Table3.vue'

import GridBasic from './views/table/grid/Basic.vue'
import GridGroup from './views/table/grid/Group.vue'
import GridReverse from './views/table/grid/Reverse.vue'
import GridTemplate from './views/table/grid/Template.vue'
import GridFooter from './views/table/grid/Footer.vue'
import GridPage from './views/table/grid/Page.vue'
import GridFullQuery from './views/table/grid/FullQuery.vue'
import GridProxy from './views/table/grid/Proxy.vue'
import GridPageProxy from './views/table/grid/PageProxy.vue'
import GridConfigProxy from './views/table/grid/ConfigProxy.vue'
import GridEdit from './views/table/grid/Edit.vue'
import GridCellDisable from './views/table/grid/CellDisable.vue'
import GridRowDisable from './views/table/grid/RowDisable.vue'
import GridForm from './views/table/grid/Form.vue'
import GridFormProxy from './views/table/grid/FormProxy.vue'
import GridToolbar from './views/table/grid/Toolbar.vue'
import GridCustomToolbar from './views/table/grid/CustomToolbar.vue'
import GridToolbarIcon from './views/table/grid/ToolbarIcon.vue'
import GridFullscreen from './views/table/grid/Fullscreen.vue'
import GridDynamic from './views/table/grid/Dynamic.vue'
import GridMenu from './views/table/grid/Menu.vue'
import GridSpan from './views/table/grid/Span.vue'
import GridUpload from './views/table/grid/Upload.vue'
import GridTree from './views/table/grid/Tree.vue'
import GridTreeLazy from './views/table/grid/TreeLazy.vue'
import GridTreeLazyEdit from './views/table/grid/TreeLazyEdit.vue'
import GridTreeEdit from './views/table/grid/TreeEdit.vue'
import GridFullEdit from './views/table/grid/FullEdit.vue'

import TableTreeBasic from './views/table/tree/Basic.vue'
import TableTreeNormal from './views/table/tree/Normal.vue'
import TableTreeIcon from './views/table/tree/Icon.vue'
import TableTreeAccordion from './views/table/tree/Accordion.vue'
import TableTreeSelection from './views/table/tree/Selection.vue'
import TableTreeRadio from './views/table/tree/Radio.vue'
import TableTreeFixed from './views/table/tree/Fixed.vue'
import TableTreeMaxHeight from './views/table/tree/MaxHeight.vue'
import TableTreeFilter from './views/table/tree/Filter.vue'
import TableTreeSort from './views/table/tree/Sort.vue'
import TableTreeGroupSummary from './views/table/tree/GroupSummary.vue'
import TableTreeGroupSummaryCount from './views/table/tree/GroupSummaryCount.vue'
import TableTreeExpand from './views/table/tree/Expand.vue'
import TableTreeExpandLazy from './views/table/tree/ExpandLazy.vue'
import TableTreeToolbar from './views/table/tree/Toolbar.vue'
import TableTreeInsert from './views/table/tree/Insert.vue'
import TableTreeMenu from './views/table/tree/Menu.vue'
import TableTreeSpan from './views/table/tree/Span.vue'
import TableTreeHighlight from './views/table/tree/Highlight.vue'
import TableTreeKeyboard from './views/table/tree/Keyboard.vue'
import TableTreeLazy from './views/table/tree/Lazy.vue'
import TableTreeLazyMenu from './views/table/tree/LazyMenu.vue'
import TableTreeLazyEdit from './views/table/tree/LazyEdit.vue'
import TableTreeLine from './views/table/tree/Line.vue'
import TableTreeEdit from './views/table/tree/Edit.vue'
import TableTreeEditCellValid from './views/table/tree/CellValid.vue'
import TableTreeEditRowValid from './views/table/tree/RowValid.vue'
import TableTreeEditForceCellValid from './views/table/tree/ForceCellValid.vue'
import TableTreeEditForceRowValid from './views/table/tree/ForceRowValid.vue'
import TableTreeTemplate from './views/table/tree/Template.vue'

import TableScroll from './views/table/scroll/Scroll.vue'
import TableScrollRows from './views/table/scroll/ScrollRows.vue'
import TableScrollFullRows from './views/table/scroll/ScrollFullRows.vue'
import TableScrollCols from './views/table/scroll/ScrollCols.vue'
import TableScrollFullCols from './views/table/scroll/ScrollFullCols.vue'
import TableScrollHighlight from './views/table/scroll/Highlight.vue'
import TableScrollKeyboard from './views/table/scroll/Keyboard.vue'
import TableScrollMaxHeight from './views/table/scroll/MaxHeight.vue'
import TableScrollGroup from './views/table/scroll/Group.vue'
import TableScrollEdit from './views/table/scroll/Edit.vue'
import TableScrollCellValid from './views/table/scroll/CellValid.vue'
import TableScrollRowValid from './views/table/scroll/RowValid.vue'
import TableScrollForceCellValid from './views/table/scroll/ForceCellValid.vue'
import TableScrollForceRowValid from './views/table/scroll/ForceRowValid.vue'
import TableScrollPartialLoad from './views/table/scroll/PartialLoad.vue'
import TableScrollFullPartialLoad from './views/table/scroll/FullPartialLoad.vue'
import TableScrollFooter from './views/table/scroll/Footer.vue'
import TableScrollTemplate from './views/table/scroll/Template.vue'
import TableScrollTabs from './views/table/scroll/Tabs.vue'
import TableScrollKeepAlives from './views/table/scroll/KeepAlives.vue'
import TableScrollKeepAliveTable1 from './views/table/scroll/keepAlives/Table1.vue'
import TableScrollKeepAliveTable2 from './views/table/scroll/keepAlives/Table2.vue'
import TableScrollKeepAliveTable3 from './views/table/scroll/keepAlives/Table3.vue'

import TableVirtualTreeBasic from './views/table/virtual-tree/Basic.vue'
import TableVirtualTreeNormal from './views/table/virtual-tree/Normal.vue'
import TableVirtualTreeRadio from './views/table/virtual-tree/Radio.vue'
import TableVirtualTreeCheckbox from './views/table/virtual-tree/Checkbox.vue'
import TableVirtualTreeIcon from './views/table/virtual-tree/Icon.vue'
import TableVirtualTreeFixed from './views/table/virtual-tree/Fixed.vue'
import TableVirtualTreeMaxHeight from './views/table/virtual-tree/MaxHeight.vue'
import TableVirtualTreeEdit from './views/table/virtual-tree/Edit.vue'
import TableVirtualTreeInsert from './views/table/virtual-tree/Insert.vue'
import TableVirtualTreeRemove from './views/table/virtual-tree/Remove.vue'
import TableVirtualTreeMenu from './views/table/virtual-tree/Menu.vue'
import TableVirtualTreeTemplate from './views/table/virtual-tree/Template.vue'
import TableVirtualTreeBig from './views/table/virtual-tree/Big.vue'

import TableEditPopupForm from './views/table/edit/PopupForm.vue'
import TableEditManual from './views/table/edit/Manual.vue'
import TableEditClick from './views/table/edit/Click.vue'
import TableEditDBLClick from './views/table/edit/DBLClick.vue'
import TableEditSelect from './views/table/edit/Select.vue'
import TableAutoClearManual from './views/table/edit/AutoClear.vue'
import TableEditInsert from './views/table/edit/Insert.vue'
import TableEditRemove from './views/table/edit/Remove.vue'
import TableEditRevert from './views/table/edit/Revert.vue'
import TableEditStatus from './views/table/edit/Status.vue'
import TableEditCellDisable from './views/table/edit/CellDisable.vue'
import TableEditRowDisable from './views/table/edit/RowDisable.vue'
import TableEditHighlightCell from './views/table/edit/HighlightCell.vue'
import TableEditKeyboard from './views/table/edit/Keyboard.vue'
import TableEditKeyboardEdit from './views/table/edit/KeyboardEdit.vue'
import TableEditCellValid from './views/table/edit/CellValid.vue'
import TableEditRowValid from './views/table/edit/RowValid.vue'
import TableEditForceCellValid from './views/table/edit/ForceCellValid.vue'
import TableEditForceRowValid from './views/table/edit/ForceRowValid.vue'
import TableEditFooter from './views/table/edit/Footer.vue'
import TableEditFooterImmediately from './views/table/edit/FooterImmediately.vue'
import TableEditExpand from './views/table/edit/Expand.vue'
import TableEditMenu from './views/table/edit/Menu.vue'
import TableEditSpan from './views/table/edit/Span.vue'
import TableEditForm from './views/table/edit/Form.vue'
import TableEditUpload from './views/table/edit/Upload.vue'
import TableEditRealtimeSave from './views/table/edit/RealtimeSave.vue'
import TableEditDataCount from './views/table/edit/DataCount.vue'
import TableEditUniqueSelect from './views/table/edit/UniqueSelect.vue'
import TableEditCascadingSelect from './views/table/edit/CascadingSelect.vue'
import TableEditEvents from './views/table/edit/Events.vue'
import TableEditTemplate from './views/table/edit/Template.vue'
import TableEditFull from './views/table/edit/Full.vue'

import TableBadEdit from './views/table/bad/Edit.vue'
import TableBadNonsupport from './views/table/bad/Nonsupport.vue'
import TableBadLineHeight from './views/table/bad/LineHeight.vue'

import ModuleIcon from './views/icon/Icon.vue'
import ModuleButton from './views/button/Button.vue'
import ModuleRadio from './views/radio/Radio.vue'
import ModuleCheckbox from './views/checkbox/Checkbox.vue'
import ModuleInput from './views/input/Input.vue'
import ModuleTextarea from './views/textarea/Textarea.vue'
import ModuleSelect from './views/select/Select.vue'
import ModulePager from './views/pager/Pager.vue'
import ModuleModal from './views/modal/Modal.vue'
import ModuleTooltip from './views/tooltip/Tooltip.vue'
import ModuleToolbar from './views/toolbar/Toolbar.vue'
import ModuleForm from './views/form/Form.vue'
import ModuleSwitch from './views/switch/Switch.vue'
import ModuleList from './views/list/List.vue'
import ModulePulldown from './views/pulldown/Pulldown.vue'

import TableOtherElement from './views/table/other/Element.vue'
import TableOtherIview from './views/table/other/Iview.vue'
import TableOtherAntd from './views/table/other/Antd.vue'
import TableSortableColumn from './views/table/other/SortableColumn.vue'
import TableSortableRow from './views/table/other/SortableRow.vue'
import TableXlsx from './views/table/other/Xlsx.vue'

import TablePluginElementConfig from './views/table/plugin/ElementConfig.vue'
import TablePluginElementFilter from './views/table/plugin/ElementFilter.vue'
import TablePluginElementPage from './views/table/plugin/ElementPage.vue'
import TablePluginIviewConfig from './views/table/plugin/IviewConfig.vue'
import TablePluginIviewFilter from './views/table/plugin/IviewFilter.vue'
import TablePluginIviewPage from './views/table/plugin/IviewPage.vue'
import TablePluginAntdConfig from './views/table/plugin/AntdConfig.vue'
import TablePluginAntdFilter from './views/table/plugin/AntdFilter.vue'
import TablePluginAntdPage from './views/table/plugin/AntdPage.vue'
import TablePluginShortcutKey from './views/table/plugin/ShortcutKey.vue'
import TablePluginCharts from './views/table/plugin/Charts.vue'
import TablePluginExportXLSX from './views/table/plugin/ExportXLSX.vue'
import TablePluginExportPDF from './views/table/plugin/ExportPDF.vue'
import TablePluginRenderer from './views/table/plugin/Renderer.vue'
import TablePluginMenus from './views/table/plugin/Menus.vue'
import TablePluginExcel from './views/table/plugin/Excel.vue'
import TablePluginTreeRows from './views/table/plugin/TreeRows'
import TablePluginTreeCols from './views/table/plugin/TreeCols'

import VXEAPI from './views/api/API.vue'
import Donation from './views/api/Donation.vue'
import Run from './views/api/Run.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: {
        name: 'StartInstall'
      }
    },
    {
      path: '/',
      redirect: {
        name: 'StartInstall'
      }
    },
    {
      path: '/table/tree/basic',
      name: 'TableTreeBasic',
      component: TableTreeBasic
    },
    {
      path: '/table/tree/normal',
      name: 'TableTreeNormal',
      component: TableTreeNormal
    },
    {
      path: '/table/tree/treeIcon',
      name: 'TableTreeIcon',
      component: TableTreeIcon
    },
    {
      path: '/table/tree/accordion',
      name: 'TableTreeAccordion',
      component: TableTreeAccordion
    },
    {
      path: '/table/tree/selection',
      name: 'TableTreeSelection',
      component: TableTreeSelection
    },
    {
      path: '/table/tree/radio',
      name: 'TableTreeRadio',
      component: TableTreeRadio
    },
    {
      path: '/table/tree/fixed',
      name: 'TableTreeFixed',
      component: TableTreeFixed
    },
    {
      path: '/table/tree/maxHeight',
      name: 'TableTreeMaxHeight',
      component: TableTreeMaxHeight
    },
    {
      path: '/table/tree/filter',
      name: 'TableTreeFilter',
      component: TableTreeFilter
    },
    {
      path: '/table/tree/sort',
      name: 'TableTreeSort',
      component: TableTreeSort
    },
    {
      path: '/table/tree/groupSummary',
      name: 'TableTreeGroupSummary',
      component: TableTreeGroupSummary
    },
    {
      path: '/table/tree/groupSummaryCount',
      name: 'TableTreeGroupSummaryCount',
      component: TableTreeGroupSummaryCount
    },
    {
      path: '/table/tree/expand',
      name: 'TableTreeExpand',
      component: TableTreeExpand
    },
    {
      path: '/table/tree/expandLazy',
      name: 'TableTreeExpandLazy',
      component: TableTreeExpandLazy
    },
    {
      path: '/table/tree/toolbar',
      name: 'TableTreeToolbar',
      component: TableTreeToolbar
    },
    {
      path: '/table/tree/insert',
      name: 'TableTreeInsert',
      component: TableTreeInsert
    },
    {
      path: '/table/tree/menu',
      name: 'TableTreeMenu',
      component: TableTreeMenu
    },
    {
      path: '/table/tree/span',
      name: 'TableTreeSpan',
      component: TableTreeSpan
    },
    {
      path: '/table/tree/highlight',
      name: 'TableTreeHighlight',
      component: TableTreeHighlight
    },
    {
      path: '/table/tree/keyboard',
      name: 'TableTreeKeyboard',
      component: TableTreeKeyboard
    },
    {
      path: '/table/tree/lazy',
      name: 'TableTreeLazy',
      component: TableTreeLazy
    },
    {
      path: '/table/tree/lazyMenu',
      name: 'TableTreeLazyMenu',
      component: TableTreeLazyMenu
    },
    {
      path: '/table/tree/lazyEdit',
      name: 'TableTreeLazyEdit',
      component: TableTreeLazyEdit
    },
    {
      path: '/table/tree/line',
      name: 'TableTreeLine',
      component: TableTreeLine
    },
    {
      path: '/table/tree/edit',
      name: 'TableTreeEdit',
      component: TableTreeEdit
    },
    {
      path: '/table/tree/editCellValid',
      name: 'TableTreeEditCellValid',
      component: TableTreeEditCellValid
    },
    {
      path: '/table/tree/editRowValid',
      name: 'TableTreeEditRowValid',
      component: TableTreeEditRowValid
    },
    {
      path: '/table/tree/editForceCellValid',
      name: 'TableTreeEditForceCellValid',
      component: TableTreeEditForceCellValid
    },
    {
      path: '/table/tree/editForceRowValid',
      name: 'TableTreeEditForceRowValid',
      component: TableTreeEditForceRowValid
    },
    {
      path: '/table/tree/template',
      name: 'TableTreeTemplate',
      component: TableTreeTemplate
    },
    {
      path: '/table/edit/keyboard',
      name: 'TableEditKeyboard',
      component: TableEditKeyboard
    }
  ]
})
