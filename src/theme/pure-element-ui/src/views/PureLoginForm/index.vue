<template>
  <el-form
    :model="form"
    status-icon
    :rules="rules"
    ref="form"
    v-loading="loading"
  >
    <el-form-item prop="account">
      <el-input
        type="text"
        placeholder="account"
        prefix-icon="el-icon-user"
        v-model="form.account"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        placeholder="password"
        prefix-icon="el-icon-key"
        v-model="form.password"
        autocomplete="off"
        @keyup.enter.native="submitForm('form')"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click.native.prevent="submitForm('form')"
        style="width: 100%"
        >Just submit</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
const defaultRules = {
  account: [
    { required: true, trigger: ['blur', 'change'] },
    { min: 3, max: 32, trigger: ['blur', 'change'], message: 'length 3 ~ 32' }
  ],
  password: [
    { required: true, trigger: ['blur', 'change'] },
    { min: 3, max: 32, trigger: ['blur', 'change'], message: 'length 3 ~ 32' }
  ]
}

export default {
  props: {
    handleSubmit: {
      type: Function,
      required: true
    },
    initialForm: {
      type: Object,
      required: false
    },
    customRules: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      loading: false,
      form: {
        password: '',
        account: '',
        ...(this.initialForm || {})
      }
    }
  },
  computed: {
    rules() {
      return this.customRules || defaultRules
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.loading = true
          await this.handleSubmit(this.form)
          this.loading = false
        } else {
          return false
        }
      })
    }
  }
}
</script>
