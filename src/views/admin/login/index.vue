<template>
  <div class="page-container">
    <div class="login-wrapper">
      <h1>Admin</h1>
      <div class="form-container" v-loading="pending">
        <el-form
          :style="{ visibility: pending ? 'hidden' : 'visible' }"
          ref="form"
          :model="form"
          :rules="rules"
          label-width="0"
          :disabled="pending"
        >
          <el-form-item prop="username">
            <el-input
              :placeholder="$t('admin.login.placeholder.username')"
              v-model.trim="form.username"
              :maxlength="64"
              clearable
              @keyup.enter.native="onSubmit"
            >
              <template #prepend><i class="el-icon-user"/></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :placeholder="$t('admin.login.placeholder.password')"
              v-model="form.password"
              :maxlength="64"
              clearable
              @keyup.enter.native="onSubmit"
            >
              <template #prepend><i class="el-icon-key"/></template>
            </el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit" class="submit-button">{{
            $t('admin.login.button.login')
          }}</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import rules from './rules'
import { token } from '@/store/modules/admin/mixins'
import { homePath } from '../../../routes/admin'

// ! DEMO
const login = form =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (form.password === 'admin' && form.username === 'admin') {
        resolve({ token: 'token-' + new Date().getTime() })
      } else {
        reject(new Error('username or password incorrect'))
      }
    }, 1000)
  })

export default {
  mixins: [token],
  data() {
    return {
      form: {
        // ! DEMO
        username: 'admin',
        password: 'admin'
      },
      rules: rules(this),

      pending: false,
      success: false,
      error: null
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.pending = true
          try {
            const { token: newToken } = await login(this.form)
            this.token = newToken
            this.success = true
            this.$router.push(homePath)
          } catch (error) {
            this.pending = false
            this.$message.error(error.message)
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../style/variable.styl'

$min-height = 480px
$max-width = 280px

.page-container
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  display flex
  flex-direction column
  align-items center
  justify-content center
  height 100%
  min-height $min-height
.login-wrapper
  min-height $min-height
  h1
    text-align center
    font-weight normal
  .form-container
    overflow hidden
    margin $base-padding auto
    max-width $max-width
    width $max-width
    padding $base-padding
    background #fff
    border-radius $base-radius
    box-shadow 0 1px 3px 0 #0000001a
    .submit-button
      width 100%
</style>
