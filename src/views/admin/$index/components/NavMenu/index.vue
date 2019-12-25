<script>
import { map } from 'lodash'

export default {
  name: 'NavMenu',
  props: {
    menu: {
      type: Array,
      required: true
    },
    isCollapse: {
      type: Boolean,
      required: true
    },
    defaultIcon: {
      type: Boolean,
      default: true
    }
  },
  render(h) {
    const it = ({ icon, label, group, children, ...props }, level = 0) => {
      const next = data => it(data, level + 1)

      if (group) {
        return h('el-menu-item-group', { props }, [
          h('span', { class: 'text', slot: 'title' }, label || 'Group'),
          ...map(group, next)
        ])
      } else if (children) {
        return h('el-submenu', { props }, [
          h('template', { slot: 'title' }, [
            !icon && !this.defaultIcon && level > 1
              ? null
              : h('i', { class: icon || 'el-icon-folder' }),
            h('span', { class: 'text', slot: 'title' }, label || 'Submenu')
          ]),
          ...map(children, next)
        ])
      } else {
        return h('el-menu-item', { props }, [
          !icon && !this.defaultIcon && level > 1
            ? null
            : h('i', { class: icon || 'el-icon-tickets' }),
          h('span', { class: 'text', slot: 'title' }, label || 'Menu item')
        ])
      }
    }

    return h(
      'el-menu',
      {
        class: {
          'el-menu-vertical': true,
          'collapse': this.isCollapse
        },
        props: {
          router: true,
          'default-active': this.$route.path,
          collapse: this.isCollapse
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
