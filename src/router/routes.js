import fast from './fast'

const routes = fast({
  [['/', 'home']]: {
    'welcome': 'home/welcome',
    'login': 'home/login'
  },
  [['/admin', 'admin']]: {
    'dashboard': 'admin/dashboard',

    'collection/:food': 'admin/food',

    [['rbac', 'admin/rbac']]: {
      'role/*': 'admin/rbac/role'
    },

    'common/forbidden': '_common_/forbidden',
    'common/empty': '_common_/empty',
    'common/404': '_common_/404'
  },
  '/404': '_common_/404',
  '*!redirect': '/404'
})

export default routes
