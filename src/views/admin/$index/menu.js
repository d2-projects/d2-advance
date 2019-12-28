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
      }
    ]
  }
]

// export default [
//   {
//     icon: 'el-icon-odometer',
//     label: 'Dashboard',
//     index: '/admin/dashboard'
//   },
//   {
//     label: 'Submenu',
//     index: '/admin/submenu',
//     children: [
//       {
//         label: 'Foo',
//         index: '/admin/submenu/foo'
//       },
//       {
//         label: 'Bar',
//         index: '/admin/submenu/bar'
//       },
//       {
//         label: 'Drink',
//         group: [
//           {
//             icon: 'el-icon-milk-tea',
//             label: 'Milk tea',
//             index: '/admin/submenu/drink/milk-tea'
//           },
//           {
//             icon: 'el-icon-coffee-cup',
//             label: 'Coffee',
//             index: '/admin/submenu/drink/coffee'
//           }
//         ]
//       },
//       {
//         icon: 'el-icon-grape',
//         label: 'Fruits',
//         index: '/admin/submenu/fruits',
//         children: [
//           {
//             icon: 'el-icon-apple',
//             label: 'Apple',
//             index: '/admin/submenu/fruits/apple'
//           },
//           {
//             icon: 'el-icon-cherry',
//             label: 'Cherry',
//             index: '/admin/submenu/fruits/cherry',
//             disabled: true
//           }
//         ]
//       }
//     ]
//   }
// ]
