import enLocale from 'element-ui/lib/locale/lang/en' // element ui 英文

const en = {
  message: {
    'login': 'login...',
    'index': 'index',
    'footer': 'footer',
    'look': 'show',
    'add': 'add',
    'del': 'delete',
    'loading': 'loading',
    'language': {
      loading: 'loading',
      cn: 'Chinese',
      en: 'English'
    },
    // 面包屑 和 导航
    bread: {
      index: 'index',
      calendar: 'calendar',
      echart: 'echart',
      fullScreen: 'screen',
      table: 'table',
      detail: 'detail',
      echart1: 'echart1',
      echart2: 'echart2'
    },
    views: {
      calender: {
        form: {
          label: 'active time',
          startTime: 'start time',
          endTime: 'end time'
        }
      }
    }
  },
  ...enLocale // element ui 英文
}

export default en