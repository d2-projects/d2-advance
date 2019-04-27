<template>
  <div class="banner-container">
    <h2>Login any account</h2>
    <pure-login-form
      class="form"
      :handleSubmit="handleLogin"
      :initialForm="$options.preview.initialForm"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  preview: {
    initialForm: {
      account: 'admin',
      password: 'admin'
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin(form) {
      await this.login(form)
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="stylus" scoped>
.form
  width 100%
  max-width 300px
  padding 0 10px
</style>
