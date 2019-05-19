<template>
  <component :is="layoutComponent" :menu="menu" @logout="handleLogout">
    <router-view />
  </component>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import menu from './menu'

export default {
  data() {
    return {
      isCollapse: false,
      menu
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
