import { keys, filter, isFunction, pick, values, each } from 'lodash'

export default {
  created() {
    each(
      values(
        pick(
          this,
          filter(keys(this), key => /^@.+/.test(key) && isFunction(this[key]))
        )
      ),
      fn => fn(this)
    )
  }
}
