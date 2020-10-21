import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // element ui 中文

const cn = {
  message: {
    'login': '登陆...',
    'index': '首页',
    'footer': '尾部',
    'look': '查看',
    'add': '新增',
    'del': '删除',
    'loading': '正在加载...',
    'language': {
      loading: '语言切换中...',
      cn: '中文',
      en: '英文'
    },
    // 面包屑 和 导航
    bread: {
      index: '首页',
      calendar: '日历',
      echart: '图表',
      fullScreen: '屏幕',
      table: '表格 ',
      detail: '详情',
      echart1: '线性',
      echart2: '扇形'
    },
    views: {
      calender: {
        form: {
          label: '活动时间',
          startTime: '开始时间',
          endTime: '结束时间'
        }
      }
    }
  },
  ...zhLocale // element ui 中文
}

export default cn