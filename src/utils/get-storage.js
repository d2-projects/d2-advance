import low from 'lowdb'
import LocalStorageAdapters from 'lowdb/adapters/LocalStorage'
import packageInfo from '../../package.json'

const storages = {}

export default (namespace = 'default', { defaults } = {}) => {
  if (!storages[namespace]) {
    storages[namespace] = low(
      new LocalStorageAdapters(
        `${packageInfo.name}__${packageInfo.version}__${namespace}`
      )
    )
  }

  const db = storages[namespace]

  if (defaults) db.defaults(defaults).write()
  return db
}
