import BScroll from 'better-scroll'

export default {
  data() {
    return {
      bscroll: null
    }
  },
  mounted() {
    this.scrollInit()
  },
  beforeDestroy() {
    this.scrollDestroy()
  },
  methods: {
    scrollInit() {
      this.bscroll = new BScroll(this.$refs.aside.$el, {
        mouseWheel: true,
        click: true
        // scrollbar: {
        //   fade: true,
        //   interactive: false
        // }
      })
    },
    scrollDestroy() {
      // https://github.com/d2-projects/d2-admin/issues/75
      try {
        this.bscroll.destroy()
      } catch (error) {
        delete this.bscroll
        this.bscroll = null
      }
    }
  }
}
