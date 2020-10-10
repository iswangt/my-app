import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/common/login'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/index/calendar',
      component: resolve => require(['@/views/common/index'], resolve),
      meta: {
        KEY: 'aside',
        child: true,
        hidden: false
      },
      children: [
        {
          path: '/index/calendar',
          name: 'calendar',
          component: resolve => require(['@/views/calendar/calendar'], resolve),
          meta: {
            child: false,
            hidden: false,
            icon: 'el-icon-s-grid',
            localekey: 'calendar'
          },
        },
        {
          path: '/index/ECharts',
          name: 'ECharts',
          component: resolve => require(['@/views/eCharts/eCharts'], resolve),
          meta: {
            child: false,
            hidden: false,
            icon: 'el-icon-office-building',
            localekey: 'echart'
          },
        },
        {
          path: '/index/fullScreen', // 测试用例scss
          name: 'fullScreen',
          component: resolve => require(['@/views/fullScreen/fullScreen'], resolve),
          meta: {
            child: false,
            hidden: false,
            icon: 'el-icon-full-screen',
            localekey: 'fullScreen',
          }
        }
      ]
    }
  ]
})


