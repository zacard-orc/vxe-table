<template>
  <div>
    <p class="tip">反转表格，只需要将 <grid-api-link prop="columns"/> 和 <grid-api-link prop="data"/> 数据进行反转<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

    <vxe-grid
      border
      class="reverse-table"
      :show-header="false"
      :columns="tableColumn"
      :data="tableData"></vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
      <code class="css">{{ demoCodes[2] }}</code>
    </pre>

    <p class="tip">更多配置<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

    <vxe-grid
      border
      show-overflow
      class="reverse-table"
      height="400"
      :show-header="false"
      :columns="tableColumn2"
      :data="tableData2"></vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[3] }}</code>
      <code class="javascript">{{ demoCodes[4] }}</code>
      <code class="css">{{ demoCodes[5] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tableColumn: [],
      tableData: [],
      myColumns: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'date3', title: 'Date' }
      ],
      tableColumn2: [],
      tableData2: [],
      myColumns2: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'date2', title: 'Datetime' },
        { field: 'rate', title: 'Rate' },
        { field: 'address2', title: 'Address' },
        { field: 'date3', title: 'Date' },
        { field: 'updateTime', title: 'UpdateTime' },
        { field: 'createTime', title: 'CreateTime' }
      ],
      demoCodes: [
        `
        <vxe-grid
          border
          highlight-hover-row
          class="reverse-table"
          :show-header="false"
          :columns="tableColumn"
          :data="tableData"></vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              tableData: [],
              tableColumn: [],
              myColumns: [
                { field: 'name', title: 'Name' },
                { field: 'role', title: 'Role' },
                { field: 'sex', title: 'Sex' },
                { field: 'age', title: 'Age' },
                { field: 'address2', title: 'Address' },
                { field: 'date3', title: 'Date' }
              ]
            }
          },
          created () {
            this.reverseTable(window.MOCK_DATA_LIST.slice(0, 6))
          },
          methods: {
            // 反转函数
            reverseTable (list) {
              const buildData = this.myColumns.map(column => {
                const item = { col0: column.title }
                list.forEach((row, index) => {
                  item[\`col\${index + 1}\`] = row[column.field]
                })
                return item
              })
              const buildColumns = [{
                field: 'col0',
                fixed: 'left',
                width: 80
              }]
              list.forEach((item, index) => {
                buildColumns.push({
                  field: \`col\${index + 1}\`,
                  minWidth: 120
                })
              })
              this.tableData = buildData
              this.tableColumn = buildColumns
            }
          }
        }
        `,
        `
        .reverse-table .vxe-body--row .vxe-body--column:first-child {
          background-color: #f8f8f9;
        }
        `,
        `
        <vxe-grid
          border
          show-overflow
          highlight-hover-row
          class="reverse-table"
          height="400"
          :show-header="false"
          :columns="tableColumn2"
          :data="tableData2"></vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              tableData2: [],
              tableColumn2: [],
              myColumns2: [
                { field: 'name', title: 'Name' },
                { field: 'role', title: 'Role' },
                { field: 'sex', title: 'Sex' },
                { field: 'age', title: 'Age' },
                { field: 'date2', title: 'Datetime' },
                { field: 'rate', title: 'Rate' },
                { field: 'address2', title: 'Address' },
                { field: 'date3', title: 'Date' },
                { field: 'updateTime', title: 'UpdateTime' },
                { field: 'createTime', title: 'CreateTime' }
              ]
            }
          },
          created () {
            this.reverseTable2(window.MOCK_DATA_LIST.slice(0, 200))
          },
          methods: {
            // 反转函数
            reverseTable2 (list) {
              const buildData = this.myColumns2.map(column => {
                const item = { col0: column.title }
                list.forEach((row, index) => {
                  item[\`col\${index + 1}\`] = row[column.field]
                })
                return item
              })
              const buildColumns = [{
                field: 'col0',
                fixed: 'left',
                width: 80
              }]
              list.forEach((item, index) => {
                buildColumns.push({
                  field: \`col\${index + 1}\`,
                  minWidth: 120
                })
              })
              this.tableData2 = buildData
              this.tableColumn2 = buildColumns
            }
          }
        }
        `,
        `
        .reverse-table .vxe-body--row .vxe-body--column:first-child {
          background-color: #f8f8f9;
        }
        `
      ]
    }
  },
  created () {
    this.reverseTable(window.MOCK_DATA_LIST.slice(0, 6))
    this.reverseTable2(window.MOCK_DATA_LIST.slice(0, 200))
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    // 将行与列进行反转
    reverseTable (list) {
      const buildData = this.myColumns.map(column => {
        const item = { col0: column.title }
        list.forEach((row, index) => {
          item[`col${index + 1}`] = row[column.field]
        })
        return item
      })
      const buildColumns = [{
        field: 'col0',
        fixed: 'left',
        width: 80
      }]
      list.forEach((item, index) => {
        buildColumns.push({
          field: `col${index + 1}`,
          minWidth: 120
        })
      })
      this.tableData = buildData
      this.tableColumn = buildColumns
    },
    reverseTable2 (list) {
      const buildData = this.myColumns2.map(column => {
        const item = { col0: column.title }
        list.forEach((row, index) => {
          item[`col${index + 1}`] = row[column.field]
        })
        return item
      })
      const buildColumns = [{
        field: 'col0',
        fixed: 'left',
        width: 80
      }]
      list.forEach((item, index) => {
        buildColumns.push({
          field: `col${index + 1}`,
          minWidth: 120
        })
      })
      this.tableData2 = buildData
      this.tableColumn2 = buildColumns
    }
  }
}
</script>

<style lang="scss">
.reverse-table .vxe-body--row .vxe-body--column:first-child {
  background-color: #f8f8f9;
}
</style>
