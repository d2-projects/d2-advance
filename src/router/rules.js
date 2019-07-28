import { store } from '@/core'

export default [
  {
    match: '/admin/**',
    interceptor: () => !store.getters.isLogin,
    action: '/404'
  },
  {
    match: '/login',
    interceptor: () => store.getters.isLogin,
    action: '/404'
  }
]
