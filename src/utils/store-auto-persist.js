import { pick, keys, join, compact } from 'lodash'
import { EventNames } from '@/lib/core'
import getStorage from '@/utils/get-storage'

export default (
  app,
  namespace,
  options = { storageKey: '', deep: false }
) => defaults => {
  const { storageKey, deep } = options
  const storage = namespace
    ? getStorage(join(compact([namespace, storageKey]), '-'), { defaults })
    : getStorage({ defaults })

  const watchValues = state => pick(state, keys(defaults))
  app.on(EventNames.storeReady, ({ store }) => {
    store.watch(
      rootState => watchValues(namespace ? rootState[namespace] : rootState),
      values => storage.setState(values).write(),
      { deep }
    )
  })

  return {
    storage,
    savedValues: pick(storage.getState(), keys(defaults || {})),
    watchValues
  }
}
