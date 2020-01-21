<template>
  <page-container>
    <template #header>
      <h2>
        {{ $t('China Cities') }}
        <el-link
          icon="el-icon-link"
          type="primary"
          href="https://github.com/MZCretin/RollToolsApi#%E4%B8%89%E5%85%A8%E5%9B%BD%E5%9F%8E%E5%B8%82%E5%88%97%E8%A1%A8%E5%85%A8%E5%9B%BD%E5%9C%B0%E7%BA%A7%E5%B8%82api%E6%95%B0%E6%8D%AE%E6%9D%A5%E6%BA%90%E5%9B%BD%E5%AE%B6%E7%BB%9F%E8%AE%A1%E5%B1%80%E4%B8%96%E7%95%8C%E5%9F%8E%E5%B8%82%E5%88%97%E8%A1%A8"
          target="_blank"
          >{{ $t('Document link') }}</el-link
        >
      </h2>
    </template>
    <async :api="$rta.apis.address.list" :transform="transform" freeze>
      <template v-slot:default="{ pending, error, data }">
        <div v-if="pending">
          Loading ...
        </div>
        <div v-else-if="error">
          {{ error.message }}
        </div>
        <div v-else>
          <el-cascader
            placeholder="试试搜索：指南"
            :options="data"
            filterable
            clearable
            style="width: 100%"
            v-model="address"
          ></el-cascader>
          <p>
            <el-cascader-panel :options="data"></el-cascader-panel>
          </p>
        </div>
      </template>
    </async>
  </page-container>
</template>

<script>
import { get, map } from 'lodash'

export default {
  inject: ['@adminContainer'],
  data() {
    return {
      address: []
    }
  },
  methods: {
    transform(response) {
      return map(
        get(response, 'data.data', []),
        ({ code: value, name: label, pchilds: children = [] }) => ({
          value,
          label,
          children: map(
            children,
            ({ code: value, name: label, cchilds: children = [] }) => ({
              value,
              label,
              children: map(children, ({ code: value, name: label }) => ({
                value,
                label
              }))
            })
          )
        })
      )
    }
  }
}
</script>
