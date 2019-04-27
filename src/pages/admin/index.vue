<template>
  <admin-layout :handleLogout="handleLogout">
    <router-view></router-view>
  </admin-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['logout']),
    async handleLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  }
}
</script>
