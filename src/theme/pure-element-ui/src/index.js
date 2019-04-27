import Vue from 'vue'
import { each } from 'lodash'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import HomeLayout from './layout/home'
import AdminLayout from './layout/admin'

import PureLoginForm from './views/PureLoginForm'

const components = {
  HomeLayout,
  AdminLayout,

  PureLoginForm
}

const install = () => {
  each(components, (component, key) => {
    Vue.component(key, component)
  })
}

export default {
  install,

  HomeLayout,
  AdminLayout,

  PureLoginForm
}
