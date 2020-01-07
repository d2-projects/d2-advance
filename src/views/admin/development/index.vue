<template>
  <page-container>
    <h2>flags</h2>
    <el-checkbox-group v-model="flags">
      <el-checkbox v-for="flag in flagOptions" :label="flag" :key="flag">{{
        flag
      }}</el-checkbox>
    </el-checkbox-group>

    <el-divider />

    <h2>i18n</h2>
    <el-radio-group v-model="$i18n.locale">
      <el-radio v-for="item in langs" :key="item.value" :label="item.value">{{
        item.label
      }}</el-radio>
    </el-radio-group>

    <el-divider />

    <h2>process.env</h2>
    <pre>{{ env }}</pre>
  </page-container>
</template>

<script>
import { container } from '@/views/admin/$index/components/mixins'
import { values } from 'lodash'
import { flags } from '@/store/modules/admin/mixins'
import { FLAGS } from '@/constants/flags'
import { langs } from '@/locales'

export default {
  mixins: [container, flags],

  data() {
    return {
      langs,
      env: process.env
    }
  },
  computed: {
    flagOptions() {
      return values(FLAGS)
    }
  }
}
</script>
