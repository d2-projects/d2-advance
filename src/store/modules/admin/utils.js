import { map, flattenDeep, uniqBy, filter } from 'lodash'
import { pathPrefix } from '@/routes/admin'

const flattenMenuItem = (() => {
  const it = (collection) =>
    map(collection, (item) => {
      const { children, group } = item
      if (children) return it(children)
      if (group) return it(group)
      return item
    })

  return (treeMenuData) => flattenDeep(it(treeMenuData))
})()

export const flattenMenuItemOfAdmin = (menu) =>
  uniqBy(
    filter(flattenMenuItem(menu), ({ index }) =>
      new RegExp(pathPrefix).test(index)
    ),
    'index'
  )
