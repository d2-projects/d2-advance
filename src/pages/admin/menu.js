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
    icon: 'guide',
    label: 'RBAC Demo',
    link: '/admin/rbac/role/'
  },
  {
    label: 'Forbidden',
    link: '/admin/forbidden',
    tags: ['common']
  },
  {
    label: 'Empty',
    link: '/admin/empty',
    tags: ['common']
  }
]
