import autoInjectorMixin from './auto-injector-mixin'

export default {
  install(Vue) {
    Vue.mixin(autoInjectorMixin)
  }
}
