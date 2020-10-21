import Vue from 'vue'


// form 时间 初始化
Vue.prototype.$formDefaultDate = () => {
  return {
    nowDate: new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1),
    thereDate: new Date(new Date(new Date().setMonth(new Date().getMonth() - 3)).toLocaleDateString())
  }
}