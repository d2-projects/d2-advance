<template>
  <div>
    <h2>admin-dashboard</h2>
    <router-link to="/">back to home</router-link>
    <div>
      <button @click="handleLogout">just logout</button>
    </div>
  </div>
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
