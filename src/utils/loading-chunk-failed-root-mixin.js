export default app => ({
  mounted() {
    this.$router.onError(error => {
      if (/loading chunk .* failed./i.test(error.message)) {
        app.emit('loadingChunkFailed', error)
        this.$alert(this.$t('loading-chunk-failed'), this.$t('ooops'), {
          confirmButtonText: this.$t('reload'),
          center: true,
          callback: () => {
            window.location.reload()
          }
        })
      }
    })
  }
})
