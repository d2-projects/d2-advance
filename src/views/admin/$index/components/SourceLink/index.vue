<script>
import { get, find } from 'lodash'

const basePath = process.env.VUE_APP_SOURCE_LINK_BASE_PATH
const propName = process.env.VUE_APP_SOURCE_LINK_PROP_NAME

export default {
  name: 'SourceLink',
  data() {
    return {
      show: true
    }
  },
  computed: {
    link() {
      if (process.env.VUE_APP_SOURCE_LINK === 'on') {
        const targetRoute = find(
          this.$route.matched,
          item => get(item, 'parent.name') === 'admin'
        )
        const path = get(targetRoute, 'components.default.' + propName)
        return path
      }
      return null
    }
  },
  render(h) {
    if (process.env.VUE_APP_SOURCE_LINK === 'on') {
      return this.show
        ? h('div', { class: 'source-link-wrapper' }, [
            h(
              'a',
              {
                class: 'link',
                attrs: { href: basePath + this.link, target: '__blank' }
              },
              [
                h('i', { class: 'el-icon-link el-icon--left' }),
                this.$t('SourceCode')
              ]
            )
          ])
        : null
    }
    return null
  }
}
</script>

<style lang="stylus" scoped>
.source-link-wrapper
  position absolute
  bottom 30px
  right -10px
  transition right .3s
  .link
    padding 6px 16px
    padding-right 16px
    border 1px solid #000
    color #fff
    text-decoration none
    border-bottom-left-radius 5px
    border-top-left-radius 5px
    font-size 12px
    border-right none
    font-weight 700
    background #000000b3
    transition background .3s
  &:hover, &:active, &:focus
    right 0
    .link
      background #000000e6
</style>
