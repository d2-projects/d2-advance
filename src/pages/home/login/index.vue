<template>
  <div class="banner-container">
    <h2>Login any account</h2>
    <pure-login-form class="form" :handleSubmit="handleLogin" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PureLoginForm from '@/components/extend/main/PureLoginForm'

export default {
  methods: {
    ...mapActions(['login']),
    async handleLogin(form) {
      await this.login(form)
      this.$router.push('/admin')
    }
  },
  components: {
    PureLoginForm
  }
}
</script>

<style lang="stylus" scoped>
.form
  width 100%
  max-width 300px
  padding 0 10px
</style>
