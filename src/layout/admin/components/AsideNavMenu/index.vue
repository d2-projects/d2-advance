<script>
import { map } from 'lodash'

export default {
  name: 'AsideNavMenu',
  props: {
    hasTransition: {
      type: Boolean,
      default: true
    },
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
    // * i18n support
    const translate = this.$t ? (text) => this.$t(text) : (i) => i

    const it = ({ icon, label, group, children, ...props }, level = 0) => {
      const next = (data) => it(data, level + 1)

      const iconComp = (defaultIcon = 'el-icon-tickets') => {
        if (this.onlyMainIcon && level > 1) return null
        return h('i', { class: icon || defaultIcon })
      }
      const labelComp = (defaultLabel = 'Untitled') =>
        h(
          'span',
          { class: 'text', slot: 'title' },
          translate(label || defaultLabel)
        )

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

    return h('div', { key: this.hasTransition }, [
      h(
        'el-menu',
        {
          class: {
            'el-menu-vertical': true,
            'collapse': this.collapse
          },
          props: {
            'collapse-transition': this.hasTransition,
            router: true,
            'default-active': this.$route.path,
            collapse: this.collapse
          },
          on: {
            select: (index, deepIndex, targetComponent) => {
              this.$emit('select', index, deepIndex, targetComponent)
            }
          }
        },
        map(this.menu, it)
      )
    ])
  }
}
</script>

<style lang="stylus" src="./themes.styl"></style>
