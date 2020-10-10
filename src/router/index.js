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
      redirect: '/index/table',
      component: resolve => require(['@/views/common/index'], resolve),
      meta: {
        KEY: 'aside',
        child: true,
        hidden: false
      },
      children: [
        {
          path: '/index/table',
          name: 'table',
          component: resolve => require(['@/views/table/table'], resolve),
          meta: {
            child: false,
            hidden: false,
            icon: 'el-icon-s-grid',
            localekey: 'table'
          },
        },
        {
          path: '/index/form',
          name: 'table',
          component: resolve => require(['@/views/form/form'], resolve),
          meta: {
            child: false,
            hidden: false,
            icon: 'el-icon-edit',
            localekey: 'form'
          },
        },
        {
          path: '/index/ECharts',
          name: 'table',
          component: resolve => require(['@/views/eCharts/eCharts'], resolve),
          meta: {
            child: false,
            hidden: false,
            icon: 'el-icon-office-building',
            localekey: 'echart'
          },
        }
      ]
    }
  ]
})


