export default vm => ({
  username: [
    {
      required: true,
      trigger: ['blur', 'change'],
      message: vm.$t('admin.login.rules.username.required')
    },
    {
      type: 'string',
      trigger: ['blur', 'change'],
      min: 3,
      max: 16,
      message: vm.$t('admin.login.rules.username.range', { min: 3, max: 16 })
    }
  ],
  password: [
    {
      required: true,
      trigger: ['blur', 'change'],
      message: vm.$t('admin.login.rules.password.required')
    },
    {
      type: 'string',
      trigger: ['blur', 'change'],
      min: 3,
      max: 16,
      message: vm.$t('admin.login.rules.password.range', { min: 3, max: 16 })
    }
  ]
})
