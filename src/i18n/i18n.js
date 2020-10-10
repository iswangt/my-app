import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './langs'
import locale from 'element-ui/lib/locale' // element ui 内部国际化


Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.lang || 'cn',
  messages
})

locale.i18n((key, value) => i18n.t(key, value)) // element ui 内部国际化

export default i18n