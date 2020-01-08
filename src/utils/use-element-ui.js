import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import en from 'element-ui/lib/locale/lang/en'
import zh_CN from 'element-ui/lib/locale/lang/zh-CN'

export default app => {
  app.i18n.mergeLocaleMessage('en', en)
  app.i18n.mergeLocaleMessage('zh-CN', zh_CN)

  Vue.use(ElementUI, {
    i18n: (key, value) => app.i18n.t(key, value)
  })
}
