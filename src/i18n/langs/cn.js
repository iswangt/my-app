import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // element ui 中文

const cn = {
  message: {
    'index': '首页',
    'footer': '尾部',
    'look': '查看',
    'add': '新增',
    'del': '删除',
    // 导航 国际化
    menu: {
      calendar: '日历',
      echart: '图表',
      fullScreen: '屏幕',
      table: '表格 ',
    },
    table:{
      detail: '详情',
      test: '测试'
    },
    bread:{
      index: '首页',
      calendar: '日历',
      echart: '图表',
      fullScreen: '屏幕',
      table: '表格 ',
      detail: '详情'
    }
  },
  ...zhLocale // element ui 中文
}

export default cn