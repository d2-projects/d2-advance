export const createMenu = () => [
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
  },
  {
    icon: 'el-icon-magic-stick',
    label: 'Development',
    index: '/admin/development'
  },
  {
    label: 'Global 404',
    index: '/not-found'
  }
]
