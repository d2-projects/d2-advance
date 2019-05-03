<template>
  <component :is="layoutComponent" :menu="menu" @logout="handleLogout">
    <router-view />
  </component>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      isCollapse: false,
      menu: [
        {
          icon: 'odometer',
          label: 'Dashboard',
          link: '/admin/dashboard'
        },
        {
          icon: 'odometer',
          label: 'Dashboard',
          link: '/admin/foo',
          children: [
            {
              icon: 'odometer',
              label: 'Dashboard',
              link: '/admin/foo/item1'
            },
            {
              icon: 'odometer',
              label: 'Dashboard',
              link: '/admin/foo/item2'
            },
            {
              label: 'group',
              group: [
                {
                  icon: 'odometer',
                  label: 'Dashboard',
                  link: '/admin/bar/item1'
                },
                {
                  icon: 'odometer',
                  label: 'Dashboard',
                  link: '/admin/bar/item2'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['mainTheme']),
    layoutComponent() {
      return this.mainTheme.name + '-admin-layout'
    }
  },
  methods: {
    ...mapActions(['logout']),
    async handleLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  }
}
</script>
