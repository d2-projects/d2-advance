<script>
export default {
  name: 'ActionBarItem',
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    tooltip: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  },
  render(h) {
    const node = h('div', { class: ['action-bar-item', this.type] }, [
      this.icon ? h('i', { class: [this.icon, 'inner-icon'] }, []) : null,
      this.$slots.default
    ])

    return this.tooltip
      ? h(
          'el-tooltip',
          {
            props: {
              effect: 'dark',
              content: this.tooltip,
              placement: 'bottom'
            }
          },
          [node]
        )
      : node
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../style/variable.styl'

$aside-width = 200px
$header-height = 60px

$gutter = 5px
$padding = 10px

.action-bar-item
  text-align right
  margin $gutter * .5
  line-height $header-height - 2 * $gutter
  color $regular-text-color
  .inner-icon
    vertical-align middle
    margin-right 5px
    width 24px
    font-size 18px
  &.normal > *
    line-height initial
  &.button
    min-width @line-height - $padding * 2
    text-align center
    border-radius 5px
    cursor pointer
    padding-left $padding
    padding-right $padding
    &:hover
      color $foreground-color
      transition all .28s
      background #ffffff80
</style>
