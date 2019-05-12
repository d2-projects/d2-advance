import fast from './fast'

const routes = fast({
  [['/', 'home']]: {
    'welcome': 'home/welcome',
    'login': 'home/login'
  },
  [['/admin', 'admin']]: {
    'dashboard': 'admin/dashboard',
    'collection/:food': 'admin/food'
  },
  '/404': '404',
  '*!redirect': '/404'
})

export default routes
