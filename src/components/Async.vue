<script>
// https://dev.to/codinglukas/vue-js-pattern-for-async-requests-using-renderless-components-3gd

export default {
  name: 'Async',
  props: {
    api: { type: Function, required: true },
    args: { type: Array, default: () => [] },
    transform: { type: Function, default: i => i },
    static: { type: Boolean, default: false }
  },
  data() {
    return {
      pending: true,
      error: false,
      data: null
    }
  },
  watch: {
    args: {
      handler() {
        if (this.static) return
        this.requestData()
      },
      deep: true
    }
  },
  mounted() {
    this.requestData()
  },
  methods: {
    async requestData() {
      this.pending = true
      try {
        const result = await this.api(...this.args)
        const data = this.transform(result)
        this.data = data
        this.error = false
        this.$emit('success')
      } catch (error) {
        this.data = null
        this.error = error
      }
      this.pending = false
    }
  },
  render() {
    return this.$scopedSlots.default({
      pending: this.pending,
      error: this.error,
      data: this.data
    })
  }
}
</script>
