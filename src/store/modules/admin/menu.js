import { pathPrefix } from '@/routes/admin'

export const createMenu = () => [
  {
    icon: 'el-icon-odometer',
    label: 'Dashboard',
    index: `${pathPrefix}/dashboard`
  },
  {
    label: 'Components',
    index: `${pathPrefix}/component-demo`,
    children: [
      {
        label: 'Page Container',
        index: `${pathPrefix}/component-demo/page-container`
      },
      {
        label: 'Aside Nav Menu',
        index: `${pathPrefix}/component-demo/aside-nav-menu`
      }
    ]
  },
  {
    label: 'Roll Tools Api',
    index: `${pathPrefix}/roll-tools-api`,
    children: [
      {
        label: 'Fuli Images',
        index: `${pathPrefix}/roll-tools-api/fuli-images`
      }
    ]
  },
  {
    icon: 'el-icon-star-off',
    label: 'Some icon',
    index: `${pathPrefix}/some-icon`
  },
  {
    icon: 'el-icon-magic-stick',
    label: 'Development',
    index: `${pathPrefix}/development`
  },
  {
    icon: 'el-icon-no-smoking',
    label: 'Forbidden',
    index: `${pathPrefix}/forbidden`
  },
  {
    icon: 'el-icon-help',
    label: 'Inner 404',
    index: `${pathPrefix}/not-found`
  },
  {
    icon: 'el-icon-help',
    label: 'Global 404',
    index: '/not-found'
  }
]
