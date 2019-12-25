<script>
import { map } from 'lodash'

export default {
  name: 'NavMenu',
  props: {
    menu: {
      type: Array,
      required: true
    },
    collapse: {
      type: Boolean,
      required: true
    },
    onlyMainIcon: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    const it = ({ icon, label, group, children, ...props }, level = 0) => {
      const next = data => it(data, level + 1)

      const iconComp = (defaultIcon = 'el-icon-tickets') => {
        if (this.onlyMainIcon && level > 1) return null
        return h('i', { class: icon || defaultIcon })
      }
      const labelComp = (defaultLabel = 'Untitled') =>
        h('span', { class: 'text', slot: 'title' }, label || defaultLabel)

      if (group) {
        return h('el-menu-item-group', { props }, [
          labelComp('Group'),
          ...map(group, next)
        ])
      } else if (children) {
        return h('el-submenu', { props }, [
          h('template', { slot: 'title' }, [
            iconComp('el-icon-folder'),
            labelComp('Submenu')
          ]),
          ...map(children, next)
        ])
      } else {
        return h('el-menu-item', { props }, [
          iconComp('el-icon-tickets'),
          labelComp('Menu item')
        ])
      }
    }

    return h(
      'el-menu',
      {
        class: {
          'el-menu-vertical': true,
          'collapse': this.collapse
        },
        props: {
          router: true,
          'default-active': this.$route.path,
          collapse: this.collapse
        }
      },
      map(this.menu, it)
    )
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../style/variable.styl'

.el-menu-vertical
  border none
  &.collapse
    .text
    >>>.el-menu--inline
      display none
>>>.el-menu-item
>>>.el-submenu__title
  color $regular-text-color
  i
    color: inherit;
  &:focus, &:hover, &.is-active
    color $foreground-color
    background #ffffff80
.el-menu
>>>.el-menu
  background transparent
>>>.el-submenu__icon-arrow
  margin-top -4px
</style>
