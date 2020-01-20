import low from 'lowdb'
import LocalStorageAdapters from 'lowdb/adapters/LocalStorage'

const storages = {}

export default (namespace = 'default', { defaults } = {}) => {
  if (!storages[namespace]) {
    storages[namespace] = low(new LocalStorageAdapters(namespace))
  }

  const db = storages[namespace]

  if (defaults) db.defaults(defaults).write()
  return db
}
