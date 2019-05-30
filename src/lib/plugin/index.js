import { isMatch, capture } from 'micromatch'
import { camelCase, set, get } from 'lodash'

const loader = (r, config) =>
  r.keys().reduce((x, key) => {
    const absKey = key.slice(1)
    if (isMatch(absKey, '/*/index.js')) {
      const module = r(key)
      const plugin = module.default || module
      const pluginName = camelCase(capture('/*/index.js', absKey)[0])
      const need = get(config, pluginName)
      if (need) set(x, pluginName, plugin(need))
    }
    return x
  }, {})

export default config =>
  loader(require.context('./packages', true, /index.js$/), config)
