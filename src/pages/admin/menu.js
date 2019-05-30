export default [
  {
    icon: 'odometer',
    label: 'Dashboard',
    link: '/admin/dashboard',
    tags: ['admin', 'management']
  },
  {
    icon: 'collection',
    label: 'Collection',
    children: [
      {
        icon: 'milk-tea',
        label: 'Milk tea',
        link: '/admin/collection/milk-tea'
      },
      {
        icon: 'ice-drink',
        label: 'Ice drink',
        link: '/admin/collection/ice-drink'
      },
      {
        label: 'Fruits',
        group: [
          {
            icon: 'apple',
            label: 'Apple',
            link: '/admin/collection/apple'
          },
          {
            icon: 'cherry',
            label: 'Cherry',
            link: '/admin/collection/cherry'
          }
        ]
      }
    ]
  },
  {
    label: 'Common',
    children: [
      {
        label: 'Forbidden',
        link: '/admin/common/forbidden',
        tags: ['common']
      },
      {
        label: 'Empty',
        link: '/admin/common/empty',
        tags: ['common']
      },
      {
        label: '404',
        link: '/admin/common/404',
        tags: ['common']
      }
    ]
  },
  {
    icon: 'guide',
    label: 'RBAC Demo',
    link: '/admin/rbac/role/'
  }
]
