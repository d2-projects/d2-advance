import Vue from 'vue'
import { each, camelCase } from 'lodash'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import HomeLayout from './layout/HomeLayout'
import AdminLayout from './layout/AdminLayout'

import LoginForm from './views/LoginForm'
import ErrorOps from './views/ErrorOps'

const components = {
  HomeLayout,
  AdminLayout,

  LoginForm,
  ErrorOps
}

const install = (Vue, option) => {
  const { prefix } = option
  each(components, (component, key) => {
    Vue.component(
      camelCase(camelCase(prefix || '') + '-' + camelCase(key)),
      component
    )
  })
}

export default {
  install,

  HomeLayout,
  AdminLayout,

  LoginForm,
  ErrorOps
}
