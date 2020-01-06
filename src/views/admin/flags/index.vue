<template>
  <page-container>
    <el-checkbox-group v-model="flags">
      <el-checkbox v-for="flag in flagOptions" :label="flag" :key="flag">{{
        flag
      }}</el-checkbox>
    </el-checkbox-group>
  </page-container>
</template>

<script>
import { container } from '@/views/admin/$index/components/mixins'
import { values } from 'lodash'
import { flags } from '@/store/modules/admin/mixins'
import { FLAGS } from '@/constants/flags'

export default {
  mixins: [container, flags],
  computed: {
    flagOptions() {
      return values(FLAGS)
    }
  }
}
</script>
