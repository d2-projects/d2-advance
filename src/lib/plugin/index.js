import Logger from './logger'
import LocalStorage from './localStorage'

export default (config /* , { router, store } */) => {
  const pluginInstances = {}

  if (config.logger) {
    pluginInstances.logger = Logger()
  }

  if (config.localStorage) {
    pluginInstances.localStorage = LocalStorage(config.localStorage)
  }

  return pluginInstances
}
