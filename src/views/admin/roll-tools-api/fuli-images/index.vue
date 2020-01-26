<template>
  <page-container type="ghost" :body-class="$style.body">
    <template #header>
      <h2>
        {{ $t('Fuli Images') }}
        <el-link
          icon="el-icon-link"
          type="primary"
          href="https://github.com/MZCretin/RollToolsApi#%E8%8E%B7%E5%8F%96%E7%A6%8F%E5%88%A9%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8"
          target="_blank"
          >{{ $t('Document link') }}</el-link
        >
      </h2>
    </template>
    <div
      class="infinite-list"
      v-infinite-scroll="loadNext"
      infinite-scroll-distance="100"
      :infinite-scroll-disabled="lock"
    >
      <template v-for="pageNumber in page">
        <async
          :key="pageNumber"
          :api="$rta.apis.image.girl"
          :args="[pageNumber]"
          :transform="transform"
          @success="lock = false"
          static
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
                v-for="item in data"
                class="infinite-list-item"
                :key="item.imageUrl"
                :src="item.imageUrl"
                :preview-src-list="[item.imageUrl]"
              ></el-image>
            </div>
          </template>
        </async>
      </template>
    </div>
  </page-container>
</template>

<script>
import { get } from 'lodash'

export default {
  inject: ['@adminContainer'],
  data() {
    return {
      page: 1,
      lock: true
    }
  },
  methods: {
    transform(response) {
      return get(response, 'data.data.list', [])
    },
    loadNext() {
      this.lock = true
      this.page++
    }
  }
}
</script>

<style lang="stylus" scoped>
.infinite-list
  overflow auto
  flex 1
  .infinite-list-item
    width 25%
    min-height 100px
</style>

<style lang="stylus" module>
.body
  display flex
</style>
