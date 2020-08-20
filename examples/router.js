import Vue from 'vue'
import Router from 'vue-router'

const StartInstall = () => import(/* webpackChunkName: "start" */ './views/table/start/Install.vue')
const StartUse = () => import(/* webpackChunkName: "start" */ './views/table/start/Use.vue')
const StartIcons = () => import(/* webpackChunkName: "start" */ './views/table/start/Icons.vue')
const StartGlobal = () => import(/* webpackChunkName: "start" */ './views/table/start/Global.vue')
const StartTheme = () => import(/* webpackChunkName: "start" */ './views/table/start/Theme.vue')
const StartI18n = () => import(/* webpackChunkName: "start" */ './views/table/start/I18n.vue')

const RendererAPI = () => import(/* webpackChunkName: "start" */ './views/table/renderer/API.vue')
const RendererFilter = () => import(/* webpackChunkName: "start" */ './views/table/renderer/Filter.vue')
const RendererDefault = () => import(/* webpackChunkName: "start" */ './views/table/renderer/Default.vue')
const RendererEdit = () => import(/* webpackChunkName: "start" */ './views/table/renderer/Edit.vue')
const RendererExpand = () => import(/* webpackChunkName: "start" */ './views/table/renderer/Expand.vue')
const RendererToolbar = () => import(/* webpackChunkName: "start" */ './views/table/renderer/Toolbar.vue')
const RendererForm = () => import(/* webpackChunkName: "start" */ './views/table/renderer/Form.vue')
const RendererEmpty = () => import(/* webpackChunkName: "start" */ './views/table/renderer/Empty.vue')

const CommandsAPI = () => import(/* webpackChunkName: "start" */ './views/table/commands/API.vue')
const MenusAPI = () => import(/* webpackChunkName: "start" */ './views/table/menus/API.vue')
const InterceptorAPI = () => import(/* webpackChunkName: "start" */ './views/table/interceptor/API.vue')
const FormatsAPI = () => import(/* webpackChunkName: "start" */ './views/table/formats/API.vue')

const TableBasic = () => import(/* webpackChunkName: "base" */ './views/table/base/Basic.vue')
const TableSize = () => import(/* webpackChunkName: "base" */ './views/table/base/Size.vue')
const TableWidth = () => import(/* webpackChunkName: "base" */ './views/table/base/Width.vue')
const TableOverflow = () => import(/* webpackChunkName: "base" */ './views/table/base/Overflow.vue')
const TableTooltip = () => import(/* webpackChunkName: "base" */ './views/table/base/Tooltip.vue')
const TableStripe = () => import(/* webpackChunkName: "base" */ './views/table/base/Stripe.vue')
const TableBorder = () => import(/* webpackChunkName: "base" */ './views/table/base/Border.vue')
const TableRound = () => import(/* webpackChunkName: "base" */ './views/table/base/Round.vue')
const TableStyle = () => import(/* webpackChunkName: "base" */ './views/table/base/Style.vue')
const TableDynamicStyle = () => import(/* webpackChunkName: "base" */ './views/table/base/DynamicStyle.vue')
const TableScrollStyle = () => import(/* webpackChunkName: "base" */ './views/table/base/ScrollStyle.vue')
const TableHeader = () => import(/* webpackChunkName: "base" */ './views/table/base/Header.vue')
const TableHeaderHighlight = () => import(/* webpackChunkName: "base" */ './views/table/base/HeaderHighlight.vue')
const TableResizable = () => import(/* webpackChunkName: "base" */ './views/table/base/Resizable.vue')
const TableMaxHeight = () => import(/* webpackChunkName: "base" */ './views/table/base/MaxHeight.vue')
const TableHeight = () => import(/* webpackChunkName: "base" */ './views/table/base/Height.vue')
const TableAutoHeight = () => import(/* webpackChunkName: "base" */ './views/table/base/AutoHeight.vue')
const TableFixed = () => import(/* webpackChunkName: "base" */ './views/table/base/Fixed.vue')
const TableFixedFull = () => import(/* webpackChunkName: "base" */ './views/table/base/FixedFull.vue')
const TableGroup = () => import(/* webpackChunkName: "base" */ './views/table/base/Group.vue')
const TableSeq = () => import(/* webpackChunkName: "base" */ './views/table/base/Seq.vue')
const TableCurrent = () => import(/* webpackChunkName: "base" */ './views/table/base/Current.vue')
const TableRadio = () => import(/* webpackChunkName: "base" */ './views/table/base/Radio.vue')
const TableSelection = () => import(/* webpackChunkName: "base" */ './views/table/base/Selection.vue')
const TableSort = () => import(/* webpackChunkName: "base" */ './views/table/base/Sort.vue')
const TableFilter = () => import(/* webpackChunkName: "base" */ './views/table/base/Filter.vue')
const TableEmpty = () => import(/* webpackChunkName: "base" */ './views/table/base/Empty.vue')
const TableLoading = () => import(/* webpackChunkName: "base" */ './views/table/base/Loading.vue')
const TableFormat = () => import(/* webpackChunkName: "base" */ './views/table/base/Format.vue')
const TableData = () => import(/* webpackChunkName: "base" */ './views/table/base/Data.vue')
const TableHTML = () => import(/* webpackChunkName: "base" */ './views/table/base/HTML.vue')
const TableFull = () => import(/* webpackChunkName: "base" */ './views/table/base/Full.vue')

const TableEvent = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Event.vue')
const TableTemplate = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Template.vue')
const TableDynamic = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Dynamic.vue')
const TableSortIcon = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/SortIcon.vue')
const TableCustomSort = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/CustomSort.vue')
const TableManualFilter = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/ManualFilter.vue')
const TableFilterIcon = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/FilterIcon.vue')
const TableSpan = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Span.vue')
const TableSpanRow = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/SpanRow.vue')
const TableMergeCell = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/MergeCell')
const TableFooter = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Footer.vue')
const TableFooterSpan = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/FooterSpan.vue')
const TableFooterMaxHeight = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/MaxHeight.vue')
const TableImport = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Import.vue')
const TableExport = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Export.vue')
const TablePrint = () => import(/* webpackChunkName: "other" */ './views/table/advanced/Print.vue')
const TableFixedType = () => import(/* webpackChunkName: "other" */ './views/table/advanced/FixedType.vue')
const TableMenu = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Menu.vue')
const TableMenuPrivilege = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/MenuPrivilege.vue')
const TableExpand = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Expand.vue')
const TableExpandIcon = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/ExpandIcon.vue')
const TableExpandLazy = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/ExpandLazy.vue')
const TableExpandAccordion = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/ExpandAccordion.vue')
const TableSearch = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Search.vue')
const TableGroupBy = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/GroupBy.vue')
const TableDetails = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Details.vue')
const TablePopupEdit = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/PopupEdit.vue')
const Toolbar = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Toolbar.vue')
const TableCustom = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Custom.vue')
const TableCustomStorage = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/CustomStorage.vue')
const TableCustomlWidthStorage = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/CustomlWidthStorage.vue')
const TableForm = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Form.vue')
const TablePage = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Page.vue')
const TablePageIcon = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/PageIcon.vue')
const TableHighlight = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Highlight.vue')
const TableRangeSelect = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/RangeSelect.vue')
const TableTabs = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/Tabs.vue')
const TableKeepAlives = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/KeepAlives.vue')
const TableKeepAliveTable1 = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/keepAlives/Table1.vue')
const TableKeepAliveTable2 = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/keepAlives/Table2.vue')
const TableKeepAliveTable3 = () => import(/* webpackChunkName: "advanced" */ './views/table/advanced/keepAlives/Table3.vue')

const GridBasic = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Basic.vue')
const GridGroup = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Group.vue')
const GridReverse = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Reverse.vue')
const GridTemplate = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Template.vue')
const GridFooter = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Footer.vue')
const GridPage = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Page.vue')
const GridFullQuery = () => import(/* webpackChunkName: "grid" */ './views/table/grid/FullQuery.vue')
const GridProxy = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Proxy.vue')
const GridPageProxy = () => import(/* webpackChunkName: "grid" */ './views/table/grid/PageProxy.vue')
const GridConfigProxy = () => import(/* webpackChunkName: "grid" */ './views/table/grid/ConfigProxy.vue')
const GridEdit = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Edit.vue')
const GridCellDisable = () => import(/* webpackChunkName: "grid" */ './views/table/grid/CellDisable.vue')
const GridRowDisable = () => import(/* webpackChunkName: "grid" */ './views/table/grid/RowDisable.vue')
const GridForm = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Form.vue')
const GridFormProxy = () => import(/* webpackChunkName: "grid" */ './views/table/grid/FormProxy.vue')
const GridToolbar = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Toolbar.vue')
const GridCustomToolbar = () => import(/* webpackChunkName: "grid" */ './views/table/grid/CustomToolbar.vue')
const GridToolbarIcon = () => import(/* webpackChunkName: "grid" */ './views/table/grid/ToolbarIcon.vue')
const GridFullscreen = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Fullscreen.vue')
const GridDynamic = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Dynamic.vue')
const GridMenu = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Menu.vue')
const GridSpan = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Span.vue')
const GridUpload = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Upload.vue')
const GridTree = () => import(/* webpackChunkName: "grid" */ './views/table/grid/Tree.vue')
const GridTreeLazy = () => import(/* webpackChunkName: "grid" */ './views/table/grid/TreeLazy.vue')
const GridTreeLazyEdit = () => import(/* webpackChunkName: "grid" */ './views/table/grid/TreeLazyEdit.vue')
const GridTreeEdit = () => import(/* webpackChunkName: "grid" */ './views/table/grid/TreeEdit.vue')
const GridFullEdit = () => import(/* webpackChunkName: "grid" */ './views/table/grid/FullEdit.vue')

const TableTreeBasic = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Basic.vue')
const TableTreeNormal = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Normal.vue')
const TableTreeIcon = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Icon.vue')
const TableTreeAccordion = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Accordion.vue')
const TableTreeSelection = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Selection.vue')
const TableTreeRadio = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Radio.vue')
const TableTreeFixed = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Fixed.vue')
const TableTreeMaxHeight = () => import(/* webpackChunkName: "tree" */ './views/table/tree/MaxHeight.vue')
const TableTreeFilter = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Filter.vue')
const TableTreeSort = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Sort.vue')
const TableTreeGroupSummary = () => import(/* webpackChunkName: "tree" */ './views/table/tree/GroupSummary.vue')
const TableTreeGroupSummaryCount = () => import(/* webpackChunkName: "tree" */ './views/table/tree/GroupSummaryCount.vue')
const TableTreeExpand = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Expand.vue')
const TableTreeExpandLazy = () => import(/* webpackChunkName: "tree" */ './views/table/tree/ExpandLazy.vue')
const TableTreeToolbar = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Toolbar.vue')
const TableTreeInsert = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Insert.vue')
const TableTreeMenu = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Menu.vue')
const TableTreeSpan = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Span.vue')
const TableTreeHighlight = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Highlight.vue')
const TableTreeKeyboard = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Keyboard.vue')
const TableTreeLazy = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Lazy.vue')
const TableTreeLazyMenu = () => import(/* webpackChunkName: "tree" */ './views/table/tree/LazyMenu.vue')
const TableTreeLazyEdit = () => import(/* webpackChunkName: "tree" */ './views/table/tree/LazyEdit.vue')
const TableTreeLine = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Line.vue')
const TableTreeEdit = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Edit.vue')
const TableTreeEditCellValid = () => import(/* webpackChunkName: "tree" */ './views/table/tree/CellValid.vue')
const TableTreeEditRowValid = () => import(/* webpackChunkName: "tree" */ './views/table/tree/RowValid.vue')
const TableTreeEditForceCellValid = () => import(/* webpackChunkName: "tree" */ './views/table/tree/ForceCellValid.vue')
const TableTreeEditForceRowValid = () => import(/* webpackChunkName: "tree" */ './views/table/tree/ForceRowValid.vue')
const TableTreeTemplate = () => import(/* webpackChunkName: "tree" */ './views/table/tree/Template.vue')

const TableScroll = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/Scroll.vue')
const TableScrollRows = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/ScrollRows.vue')
const TableScrollFullRows = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/ScrollFullRows.vue')
const TableScrollCols = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/ScrollCols.vue')
const TableScrollFullCols = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/ScrollFullCols.vue')
const TableScrollHighlight = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/Highlight.vue')
const TableScrollKeyboard = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/Keyboard.vue')
const TableScrollMaxHeight = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/MaxHeight.vue')
const TableScrollGroup = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/Group.vue')
const TableScrollEdit = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/Edit.vue')
const TableScrollCellValid = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/CellValid.vue')
const TableScrollRowValid = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/RowValid.vue')
const TableScrollForceCellValid = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/ForceCellValid.vue')
const TableScrollForceRowValid = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/ForceRowValid.vue')
const TableScrollPartialLoad = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/PartialLoad.vue')
const TableScrollFullPartialLoad = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/FullPartialLoad.vue')
const TableScrollFooter = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/Footer.vue')
const TableScrollTemplate = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/Template.vue')
const TableScrollTabs = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/Tabs.vue')
const TableScrollKeepAlives = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/KeepAlives.vue')
const TableScrollKeepAliveTable1 = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/keepAlives/Table1.vue')
const TableScrollKeepAliveTable2 = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/keepAlives/Table2.vue')
const TableScrollKeepAliveTable3 = () => import(/* webpackChunkName: "scroll" */ './views/table/scroll/keepAlives/Table3.vue')

const TableVirtualTreeBasic = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Basic.vue')
const TableVirtualTreeNormal = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Normal.vue')
const TableVirtualTreeRadio = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Radio.vue')
const TableVirtualTreeCheckbox = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Checkbox.vue')
const TableVirtualTreeIcon = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Icon.vue')
const TableVirtualTreeFixed = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Fixed.vue')
const TableVirtualTreeMaxHeight = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/MaxHeight.vue')
const TableVirtualTreeEdit = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Edit.vue')
const TableVirtualTreeInsert = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Insert.vue')
const TableVirtualTreeRemove = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Remove.vue')
const TableVirtualTreeMenu = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Menu.vue')
const TableVirtualTreeTemplate = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Template.vue')
const TableVirtualTreeBig = () => import(/* webpackChunkName: "virtual-tree" */ './views/table/virtual-tree/Big.vue')

const TableEditPopupForm = () => import(/* webpackChunkName: "edit" */ './views/table/edit/PopupForm.vue')
const TableEditManual = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Manual.vue')
const TableEditClick = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Click.vue')
const TableEditDBLClick = () => import(/* webpackChunkName: "edit" */ './views/table/edit/DBLClick.vue')
const TableEditSelect = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Select.vue')
const TableAutoClearManual = () => import(/* webpackChunkName: "edit" */ './views/table/edit/AutoClear.vue')
const TableEditInsert = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Insert.vue')
const TableEditRemove = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Remove.vue')
const TableEditRevert = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Revert.vue')
const TableEditStatus = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Status.vue')
const TableEditCellDisable = () => import(/* webpackChunkName: "edit" */ './views/table/edit/CellDisable.vue')
const TableEditRowDisable = () => import(/* webpackChunkName: "edit" */ './views/table/edit/RowDisable.vue')
const TableEditHighlightCell = () => import(/* webpackChunkName: "edit" */ './views/table/edit/HighlightCell.vue')
const TableEditKeyboard = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Keyboard.vue')
const TableEditKeyboardEdit = () => import(/* webpackChunkName: "edit" */ './views/table/edit/KeyboardEdit.vue')
const TableEditCellValid = () => import(/* webpackChunkName: "edit" */ './views/table/edit/CellValid.vue')
const TableEditRowValid = () => import(/* webpackChunkName: "edit" */ './views/table/edit/RowValid.vue')
const TableEditForceCellValid = () => import(/* webpackChunkName: "edit" */ './views/table/edit/ForceCellValid.vue')
const TableEditForceRowValid = () => import(/* webpackChunkName: "edit" */ './views/table/edit/ForceRowValid.vue')
const TableEditFooter = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Footer.vue')
const TableEditFooterImmediately = () => import(/* webpackChunkName: "edit" */ './views/table/edit/FooterImmediately.vue')
const TableEditExpand = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Expand.vue')
const TableEditMenu = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Menu.vue')
const TableEditSpan = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Span.vue')
const TableEditForm = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Form.vue')
const TableEditUpload = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Upload.vue')
const TableEditRealtimeSave = () => import(/* webpackChunkName: "edit" */ './views/table/edit/RealtimeSave.vue')
const TableEditDataCount = () => import(/* webpackChunkName: "edit" */ './views/table/edit/DataCount.vue')
const TableEditUniqueSelect = () => import(/* webpackChunkName: "edit" */ './views/table/edit/UniqueSelect.vue')
const TableEditCascadingSelect = () => import(/* webpackChunkName: "edit" */ './views/table/edit/CascadingSelect.vue')
const TableEditEvents = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Events.vue')
const TableEditTemplate = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Template.vue')
const TableEditFull = () => import(/* webpackChunkName: "edit" */ './views/table/edit/Full.vue')

const TableBadEdit = () => import(/* webpackChunkName: "edit" */ './views/table/bad/Edit.vue')
const TableBadNonsupport = () => import(/* webpackChunkName: "edit" */ './views/table/bad/Nonsupport.vue')
const TableBadLineHeight = () => import(/* webpackChunkName: "edit" */ './views/table/bad/LineHeight.vue')

const ModuleIcon = () => import(/* webpackChunkName: "module" */ './views/icon/Icon.vue')
const ModuleButton = () => import(/* webpackChunkName: "module" */ './views/button/Button.vue')
const ModuleRadio = () => import(/* webpackChunkName: "module" */ './views/radio/Radio.vue')
const ModuleCheckbox = () => import(/* webpackChunkName: "module" */ './views/checkbox/Checkbox.vue')
const ModuleInput = () => import(/* webpackChunkName: "module" */ './views/input/Input.vue')
const ModuleTextarea = () => import(/* webpackChunkName: "module" */ './views/textarea/Textarea.vue')
const ModuleSelect = () => import(/* webpackChunkName: "module" */ './views/select/Select.vue')
const ModulePager = () => import(/* webpackChunkName: "module" */ './views/pager/Pager.vue')
const ModuleModal = () => import(/* webpackChunkName: "module" */ './views/modal/Modal.vue')
const ModuleTooltip = () => import(/* webpackChunkName: "module" */ './views/tooltip/Tooltip.vue')
const ModuleToolbar = () => import(/* webpackChunkName: "module" */ './views/toolbar/Toolbar.vue')
const ModuleForm = () => import(/* webpackChunkName: "module" */ './views/form/Form.vue')
const ModuleSwitch = () => import(/* webpackChunkName: "module" */ './views/switch/Switch.vue')
const ModuleList = () => import(/* webpackChunkName: "module" */ './views/list/List.vue')
const ModulePulldown = () => import(/* webpackChunkName: "module" */ './views/pulldown/Pulldown.vue')

const TableOtherElement = () => import(/* webpackChunkName: "other" */ './views/table/other/Element.vue')
const TableOtherIview = () => import(/* webpackChunkName: "other" */ './views/table/other/Iview.vue')
const TableOtherAntd = () => import(/* webpackChunkName: "other" */ './views/table/other/Antd.vue')
const TableSortableColumn = () => import(/* webpackChunkName: "other" */ './views/table/other/SortableColumn.vue')
const TableSortableRow = () => import(/* webpackChunkName: "other" */ './views/table/other/SortableRow.vue')
const TableXlsx = () => import(/* webpackChunkName: "other" */ './views/table/other/Xlsx.vue')

const TablePluginElementConfig = () => import(/* webpackChunkName: "plugin" */ './views/table/plugin/ElementConfig.vue')
const TablePluginElementFilter = () => import(/* webpackChunkName: "plugin" */ './views/table/plugin/ElementFilter.vue')
const TablePluginElementPage = () => import(/* webpackChunkName: "plugin" */ './views/table/plugin/ElementPage.vue')
const TablePluginIviewConfig = () => import(/* webpackChunkName: "plugin" */ './views/table/plugin/IviewConfig.vue')
const TablePluginIviewFilter = () => import(/* webpackChunkName: "plugin" */ './views/table/plugin/IviewFilter.vue')
const TablePluginIviewPage = () => import(/* webpackChunkName: "plugin" */ './views/table/plugin/IviewPage.vue')
const TablePluginAntdConfig = () => import(/* webpackChunkName: "plugin" */ './views/table/plugin/AntdConfig.vue')
const TablePluginAntdFilter = () => import(/* webpackChunkName: "plugin" */ './views/table/plugin/AntdFilter.vue')
const TablePluginAntdPage = () => import(/* webpackChunkName: "plugin" */ './views/table/plugin/AntdPage.vue')
const TablePluginShortcutKey = () => import(/* webpackChunkName: "excel" */ './views/table/plugin/ShortcutKey.vue')
const TablePluginCharts = () => import(/* webpackChunkName: "excel" */ './views/table/plugin/Charts.vue')
const TablePluginExportXLSX = () => import(/* webpackChunkName: "excel" */ './views/table/plugin/ExportXLSX.vue')
const TablePluginExportPDF = () => import(/* webpackChunkName: "excel" */ './views/table/plugin/ExportPDF.vue')
const TablePluginRenderer = () => import(/* webpackChunkName: "excel" */ './views/table/plugin/Renderer.vue')
const TablePluginMenus = () => import(/* webpackChunkName: "excel" */ './views/table/plugin/Menus.vue')
const TablePluginExcel = () => import(/* webpackChunkName: "excel" */ './views/table/plugin/Excel.vue')
const TablePluginTreeRows = () => import(/* webpackChunkName: "excel" */ './views/table/plugin/TreeRows')
const TablePluginTreeCols = () => import(/* webpackChunkName: "excel" */ './views/table/plugin/TreeCols')

const VXEAPI = () => import(/* webpackChunkName: "api" */ './views/api/API.vue')
const Donation = () => import(/* webpackChunkName: "api" */ './views/api/Donation.vue')

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
      path: '/table/edit/manual',
      name: 'TableEditManual',
      component: TableEditManual
    },
    {
      path: '/table/edit/click',
      name: 'TableEditClick',
      component: TableEditClick
    },
    {
      path: '/table/edit/dblclick',
      name: 'TableEditDBLClick',
      component: TableEditDBLClick
    },
    {
      path: '/table/edit/select',
      name: 'TableEditSelect',
      component: TableEditSelect
    },
    {
      path: '/table/edit/autoClear',
      name: 'TableAutoClearManual',
      component: TableAutoClearManual
    },
    {
      path: '/table/edit/insert',
      name: 'TableEditInsert',
      component: TableEditInsert
    },
    {
      path: '/table/edit/remove',
      name: 'TableEditRemove',
      component: TableEditRemove
    },
    {
      path: '/table/edit/revert',
      name: 'TableEditRevert',
      component: TableEditRevert
    },
    {
      path: '/table/edit/status',
      name: 'TableEditStatus',
      component: TableEditStatus
    },
    {
      path: '/table/edit/cellDisable',
      name: 'TableEditCellDisable',
      component: TableEditCellDisable
    },
    {
      path: '/table/edit/rowDisable',
      name: 'TableEditRowDisable',
      component: TableEditRowDisable
    },
    {
      path: '/table/edit/highlightCell',
      name: 'TableEditHighlightCell',
      component: TableEditHighlightCell
    },
    {
      path: '/table/edit/keyboard',
      name: 'TableEditKeyboard',
      component: TableEditKeyboard
    }
  ]
})
