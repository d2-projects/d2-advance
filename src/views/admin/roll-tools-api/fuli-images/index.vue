<template>
  <page-container type="ghost" :body-class="$style.body">
    <template #header>
      <h1>{{ $t('Fuli Images') }}</h1>
      <p>
        <el-link
          icon="el-icon-link"
          type="primary"
          href="https://github.com/MZCretin/RollToolsApi#%E8%8E%B7%E5%8F%96%E7%A6%8F%E5%88%A9%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8"
          target="_blank"
          >{{ $t('Document link') }}</el-link
        >
      </p>
    </template>
    <div class="infinite-list" v-infinite-scroll="fetchData">
      <el-image
        v-for="item in list"
        class="infinite-list-item"
        :key="item.imageUrl"
        :src="item.imageUrl"
      ></el-image>
    </div>
  </page-container>
</template>

<script>
import { container } from '@/views/admin/$index/components/mixins'
import { get, uniqBy } from 'lodash'

export default {
  mixins: [container],
  data() {
    return {
      page: 0,
      list: [],
      loading: false
    }
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true
        const response = await this.$rta.apis.image.girl(this.page + 1)
        const { page, list } = get(response, 'data.data')
        this.list = uniqBy([...this.list, ...list], 'imageUrl')
        this.page = page
        this.loading = false
      } catch (error) {
        console.error(error)
        this.loading = false
      }
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
