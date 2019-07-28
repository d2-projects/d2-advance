import { get, each, isObject, isString, omitBy, isUndefined } from 'lodash'
import { capture } from 'micromatch'

// @ https://webpack.js.org/api/module-methods/#import-1
const _import = file => () =>
  import(
    /* webpackChunkName: "pages" */
    /* webpackMode: "lazy" */
    `@/pages/${file}` // default root path: '@/pages/'
  )

export const pathMerge = (parent, child) =>
  capture(child + '*', parent)
    ? child
    : (parent + '/' + child).replace(/\/+/g, '/')

const generateFastRoutes = (fast, parentPath = '/') => {
  const arr = []
  each(fast, (value, key) => {
    let path, component, children, redirect
    if (isString(key) && isString(value)) {
      const keys = key.split('!')
      if (keys.length === 1) {
        path = pathMerge(parentPath, keys[0])
        component = value
      } else if (keys.length === 2 && keys[1] === 'redirect') {
        path = pathMerge(parentPath, keys[0])
        redirect = value
      }
    } else if (isString(key) && isObject(value)) {
      const keys = key.split(',')
      if (keys.length === 2) {
        path = pathMerge(parentPath, get(keys, '0'))
        component = get(keys, '1')
        children = generateFastRoutes(value, path)
        redirect = get(children, '0.path')
      }
    }
    component = component ? _import(component) : undefined
    arr.push(omitBy({ path, component, children, redirect }, isUndefined))
  })
  return arr
}

export default generateFastRoutes
