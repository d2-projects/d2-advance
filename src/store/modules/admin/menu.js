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
    icon: 'el-icon-star-off',
    label: 'Some icon',
    index: '/admin/some-icon'
  },
  {
    icon: 'el-icon-magic-stick',
    label: 'Development',
    index: '/admin/development'
  },
  {
    icon: 'el-icon-no-smoking',
    label: 'Forbidden',
    index: '/admin/forbidden'
  },
  {
    icon: 'el-icon-help',
    label: 'Inner 404',
    index: '/admin/not-found'
  },
  {
    icon: 'el-icon-help',
    label: 'Global 404',
    index: '/not-found'
  }
]
