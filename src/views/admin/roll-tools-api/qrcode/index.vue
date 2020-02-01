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
    <el-input
      type="textarea"
      :placeholder="$t('admin.roll-tools-api.qrcode.placeholder.content')"
      v-model="content"
      maxlength="255"
      show-word-limit
    />
    <p>
      <el-slider
        :format-tooltip="v => v + 'px'"
        v-model="size"
        :max="maxSize"
        :min="minSize"
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
    <async
      v-if="confirmed"
      :api="$rta.apis.qrcode.single"
      :args="confirmed"
      :transform="transform"
    >
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
  </page-container>
</template>

<script>
import { get } from 'lodash'

export default {
  inject: ['@adminContainer'],
  data() {
    return {
      confirmed: null,
      content: '',
      size: 500,
      maxSize: 1024,
      minSize: 100
    }
  },
  methods: {
    transform(result) {
      return get(result, 'data.data', {})
    },
    handleGenerate() {
      this.confirmed = [this.content, { size: this.size }]
    }
  }
}
</script>
