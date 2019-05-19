import { toString, compact, map, join } from 'lodash'
import low from 'lowdb'
import LocalStorageAdapters from 'lowdb/adapters/LocalStorage'

const LocalStorage = option => {
  const { domain, version, name, defaults } = option
  const localStorageKey = join(
    compact(map([domain, version, name], toString)),
    '-'
  )
  const db = low(new LocalStorageAdapters(localStorageKey))
  if (defaults) db.defaults(defaults).write()
  return db
}

export default LocalStorage
