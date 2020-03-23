<template>
  <page-container>
    <template #header>
      <h2>
        {{ $t('QR Code') }}
        <el-link
          icon="el-icon-link"
          type="primary"
          href="https://github.com/MZCretin/RollToolsApi#%E5%85%AB%E7%94%9F%E6%88%90%E4%BA%8C%E7%BB%B4%E7%A0%81"
          target="_blank"
          >{{ $t('Document link') }}</el-link
        >
      </h2>
    </template>
    <div class="body-wrapper">
      <el-input
        v-model="content"
        type="textarea"
        :placeholder="$t('admin.roll-tools-api.qrcode.placeholder.content')"
        maxlength="255"
        show-word-limit
        :rows="5"
      />
      <p>
        <el-slider
          v-model="size"
          :format-tooltip="(v) => v + 'px'"
          :max="maxSize"
          :min="minSize"
          show-input
        ></el-slider>
      </p>
      <p>
        <el-upload
          ref="logo"
          action="#"
          class="updater"
          :limit="1"
          :auto-upload="false"
          :show-file-list="false"
          :multiple="false"
          :on-change="loadLogo"
        >
          <template v-if="logo_src">
            <img :src="logo_src" class="logo" />
          </template>
          <template v-else>
            <i class="el-icon-plus updater-icon"></i>
            <span class="updater-icon-desc">Logo</span>
          </template>
        </el-upload>
        <el-button
          v-if="logo_src"
          type="danger"
          icon="el-icon-delete"
          circle
          @click="handleRemove"
        ></el-button>
      </p>
      <p>
        <el-slider
          v-model="logo_size"
          :disabled="!logo"
          :format-tooltip="(v) => v + 'px'"
          :max="size / 2"
          :min="minSize / 5"
          show-input
        ></el-slider>
      </p>
      <p>
        <el-button
          type="primary"
          :disabled="!content.length"
          @click="handleGenerate"
          >{{ $t('admin.roll-tools-api.qrcode.generate') }}</el-button
        >
      </p>
      <async v-if="confirmed" :api="$rtApi.getQrcodeImage" :args="confirmed">
        <template v-slot:default="{ pending, error, data }">
          <div v-if="pending">
            Loading ...
          </div>
          <div v-else-if="error">
            {{ error.message }}
          </div>
          <div v-else>
            <el-image
              :src="data.qrCodeUrl || data.qrCodeBase64"
              fit="contain"
            ></el-image>
          </div>
        </template>
      </async>
    </div>
  </page-container>
</template>

<script>
import { pick } from 'lodash'

export default {
  inject: ['@adminContainer'],
  data() {
    return {
      confirmed: null,
      content: '',
      size: 500,
      maxSize: 1024,
      minSize: 100,
      logo: null,
      logo_size: 100,
      logo_src: null
    }
  },
  watch: {
    size(value) {
      this.logo_size = ~~(value / 5)
    }
  },
  methods: {
    handleGenerate() {
      this.confirmed = [pick(this, ['content', 'size', 'logo', 'logo_size'])]
    },
    loadLogo({ raw: file }) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.warning(
          this.$t('admin.roll-tools-api.qrcode.logo_type_limit', ['JPG'])
        )
        return this.$refs.logo.clearFiles()
      }
      if (!isLt2M) {
        this.$message.warning(
          this.$t('admin.roll-tools-api.qrcode.logo_size_limit', ['2MB'])
        )
        return this.$refs.logo.clearFiles()
      }

      this.$refs.logo.clearFiles()
      this.logo = file

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = (event) => {
        this.logo_src = event.target.result
      }
    },
    handleRemove() {
      this.$refs.logo.clearFiles()
      this.logo = null
      this.logo_src = null
    }
  }
}
</script>

<style lang="stylus" scoped>
$logo-size = 140px

.body-wrapper
  max-width 720px

.updater
  display inline-block
  margin-right 10px
  vertical-align middle
  >>>
    .el-upload
      border 1px dashed #d9d9d9
      border-radius 6px
      cursor pointer
      position relative
      overflow hidden
      &:hover
        border-color #409eff
  &-icon
    font-size 28px
    color #8c939d
    width $logo-size
    height $logo-size
    line-height $logo-size
    text-align center
    &-desc
      position absolute
      bottom 10px
      color #8c939d
      left 0
      right 0
.logo
  width $logo-size
  height $logo-size
  display block
</style>
