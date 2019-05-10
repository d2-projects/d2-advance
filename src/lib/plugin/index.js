import Logger from './logger'

export default (config /* , { router, store } */) => {
  const pluginInstances = {}

  if (config.logger) {
    pluginInstances.logger = Logger()
  }

  return pluginInstances
}
