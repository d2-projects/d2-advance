<template>
  <div class="source-viewer-wrap">
    <div v-if="enable && deep" class="toggle" @click="handleClick">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
import { map, compact, last } from 'lodash'

const enable = process.env.VUE_APP_SOURCE_VIEWER === 'on'
const basePath = process.env.VUE_APP_SOURCE_VIEWER_BASE_PATH
const propName = process.env.VUE_APP_SOURCE_VIEWER_PROP_NAME

const fullPropPath = `components.default.${propName}`

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
      this.paths = compact(map(to.matched, fullPropPath))
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
  position fixed
  bottom 22px
  right 0
  .toggle
    margin-right -30px
    font-size 12px
    z-index 99999
    padding 5px 10px
    padding-right 15px
    border-radius 3px
    background red
    cursor pointer
    border 1px solid rgb(224, 228, 231)
    background-color rgb(242, 245, 247)
    box-shadow rgba(118, 118, 118, 0.11) 2px 0px 5px 0px
    color #24292e
    transition all .25s
    font-family -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol
    &:hover, &:focus
      margin-right -15px
</style>
