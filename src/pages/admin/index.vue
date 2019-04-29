<template>
  <component :is="layoutComponent" @logout="handleLogout">
    <router-view />
  </component>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
