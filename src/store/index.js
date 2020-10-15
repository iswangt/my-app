import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: { //相当于vue对象中的data，用以存放数据
    // lang: window.config.conmmonLang // 初始化语言
  },
  mutations: { //相当于methods，用以修改数据的

  },
})
export default store