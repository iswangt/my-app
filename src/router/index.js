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
      children: [
        {
          path: '/index/table',
          name: 'table',
          component: resolve => require(['@/views/table/table'], resolve)
        },
        {
          path: '/index/form',
          name: 'table',
          component: resolve => require(['@/views/form/form'], resolve)
        }
      ]
    }
  ]
})


