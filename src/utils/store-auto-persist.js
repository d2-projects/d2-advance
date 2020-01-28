import { pick, keys } from 'lodash'
import { EventNames } from '@/lib/core'
import getStorage from '@/utils/get-storage'

export default (app, namespace) => defaults => {
  const storage = namespace
    ? getStorage(namespace, { defaults })
    : getStorage({ defaults })

  const watchValues = state => pick(state, keys(defaults))
  app.on(EventNames.storeReady, ({ store }) => {
    store.watch(
      rootState => watchValues(namespace ? rootState[namespace] : rootState),
      values => storage.setState(values).write()
    )
  })

  return {
    storage,
    savedValues: pick(storage.getState(), keys(defaults || {})),
    watchValues
  }
}
