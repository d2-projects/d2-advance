<template>
  <div>
    <h2>home-login</h2>
    <button @click="handleLogin">just login</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      await this.login(this.form)
      this.$router.push('/admin')
    }
  }
}
</script>
