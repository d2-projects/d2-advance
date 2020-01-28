import { langs } from '@/locales'
import getStorage from './get-storage'

export default app => ({
  beforeCreate() {
    // get from localStorage
    const lang = getStorage()
      .get('lang')
      .value()
    if (langs.find(item => item.value === lang)) {
      this.$i18n.locale = lang
    }
  },
  watch: {
    '$i18n.locale': {
      handler: lang => {
        document.querySelector('html').setAttribute('lang', lang)
        app.emit('changeLanguage', lang)
        // set to localStorage
        getStorage()
          .set('lang', lang)
          .write()
      },
      immediate: true
    }
  }
})
