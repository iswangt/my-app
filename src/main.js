import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'; // element组件
import 'element-ui/lib/theme-chalk/index.css'; // element组件样式
import router from './router' // 路由
import store from './store/index' // 仓库（公共数据）
import i18n from './i18n/i18n' // 自定义 vue-i18n+element ui 国际化
import echarts from 'echarts' // echarts图表
import vcharts from 'v-charts' // 再次封装的适合vue2.0的echarts图表
import '@/directive/prototype' // 公共方法
import '@/filter/filter' //过滤器



Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(vcharts)


Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  i18n,
  echarts,
  render: h => h(App),
}).$mount('#app')
