import VueI18n from 'vue-i18n'
import { defaultsDeep } from 'lodash'

import en from 'element-ui/lib/locale/lang/en'
import zh_CN from 'element-ui/lib/locale/lang/zh-CN'

function loadLocaleMessages() {
  const locales = require.context('./lang', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export const createI18n = () =>
  new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: defaultsDeep(loadLocaleMessages(), {
      en,
      'zh-CN': zh_CN
    })
  })
