import Vue from 'vue'
import 'nprogress/nprogress.css'
import nprogress from 'nprogress'

export default _app => ({
  mounted() {
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
    })

    this.$router.onError(_error => {
      nprogress.done()
    })
  }
})
