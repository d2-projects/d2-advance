<template>
  <div v-if="enable && deep" class="source-viewer-wrap" @click="handleClick">
    <span>{{ text }}</span>
  </div>
</template>

<script>
import { map, compact, last } from 'lodash'

const enable = process.env.VUE_APP_SOURCE_VIEWER_ENABLE
const basePath = process.env.VUE_APP_SOURCE_VIEWER_BASE_PATH

export default {
  data() {
    return {
      enable,
      text: '<SourceCode />',
      paths: []
    }
  },
  computed: {
    deep() {
      return last(this.paths)
    }
  },
  watch: {
    $route(to) {
      this.paths = compact(map(to.matched, 'components.default.__file'))
    }
  },
  methods: {
    handleClick() {
      window.open(basePath + this.deep)
    }
  }
}
</script>

<style lang="stylus" scoped>
.source-viewer-wrap
  font-size 10px
  z-index 99999
  position fixed
  bottom 22px
  right -60px
  padding 5px 10px
  padding-right 15px
  border-radius 3px
  background red
  cursor pointer
  border 1px solid #0000005e
  background rgba(0, 0, 0, 0.5)
  background #0009
  color #fff
  transition all .25s
  font-family monospace
  &:hover, &:focus
    right -15px
    background rgba(0, 0, 0, 0.7)
</style>
