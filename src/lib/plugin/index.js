import { isMatch, capture } from 'micromatch'
import { camelCase, set, get } from 'lodash'

export const autowired = (requireContext, config) =>
  requireContext.keys().reduce((x, key) => {
    const absKey = key.slice(1)
    if (isMatch(absKey, '/*/index.js')) {
      const module = requireContext(key)
      const plugin = module.default || module
      const pluginName = camelCase(capture('/*/index.js', absKey)[0])
      const need = get(config, pluginName)
      if (need) set(x, pluginName, plugin(need))
    }
    return x
  }, {})

export default config =>
  autowired(require.context('./packages', true, /index.js$/), config)
