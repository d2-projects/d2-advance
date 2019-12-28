export default [
  {
    icon: 'el-icon-odometer',
    label: 'Dashboard',
    index: '/admin/dashboard'
  },
  {
    label: 'Components',
    index: '/admin/components',
    children: [
      {
        label: 'Page Container',
        index: '/admin/component-demo/page-container'
      },
      {
        label: 'Aside Nav Menu',
        index: '/admin/component-demo/aside-nav-menu'
      }
    ]
  }
]
