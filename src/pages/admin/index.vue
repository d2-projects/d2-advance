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
          link: '/admin/dashboard',
          tags: ['admin', 'management']
        },
        {
          icon: 'collection',
          label: 'Collection',
          children: [
            {
              icon: 'milk-tea',
              label: 'Milk tea',
              link: '/admin/collection/milk-tea'
            },
            {
              icon: 'ice-drink',
              label: 'Ice drink',
              link: '/admin/collection/ice-drink'
            },
            {
              label: 'Fruits',
              group: [
                {
                  icon: 'apple',
                  label: 'Apple',
                  link: '/admin/collection/apple'
                },
                {
                  icon: 'cherry',
                  label: 'Cherry',
                  link: '/admin/collection/cherry'
                }
              ]
            }
          ]
        },
        {
          label: 'Empty',
          link: '/admin/empty',
          tags: ['common']
        },
        {
          label: 'Forbidden',
          link: '/admin/forbidden',
          tags: ['common']
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
