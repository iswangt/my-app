import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // element ui 中文

const cn = {
  message: {
    'login': '首页',
    'footer': '尾部',
    'look': '查看',
    'add': '新增',
    'del': '删除',
    // 导航 国际化
    menu: {
      calendar: '日历',
      echart: '图表',
      fullScreen: '屏幕',
      option: '选择 '
    },
    // 选择项
    option:{
      label: '活动区域',
      placeholder: '请选择活动区域',
      label1: '区域一',
      label2: '区域二'
    }
  },
  ...zhLocale // element ui 中文
}

export default cn