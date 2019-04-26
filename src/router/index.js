import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import rules from './rules'
import engine from './engine'

Vue.use(Router)

export default options =>
  engine({
    routes,
    rules,
    ...options
  })
