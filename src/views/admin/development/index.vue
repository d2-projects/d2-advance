<template>
  <page-container>
    <template #header>
      <h1>{{ $t('Development') }} <i class="el-icon-magic-stick"></i></h1>
    </template>

    <h2>Preferences</h2>

    <p><b>showTabs：</b><el-switch v-model="showTabs"></el-switch></p>
    <p>
      <b>showSourceLink：</b><el-switch v-model="showSourceLink"></el-switch>
    </p>
    <p><b>asideCollapse：</b><el-switch v-model="asideCollapse"></el-switch></p>
    <p>
      <b>pageTransition：</b><el-switch v-model="pageTransition"></el-switch>
    </p>
    <p>
      <b>asideTransition：</b><el-switch v-model="asideTransition"></el-switch>
    </p>

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
import { values } from 'lodash'
import {
  pageTabs,
  sourceLink,
  asideCollapse,
  pageTransition,
  asideTransition
} from '@/store/modules/admin/mixins'
import { langs } from '@/locales'

export default {
  mixins: [
    pageTabs,
    sourceLink,
    asideCollapse,
    pageTransition,
    asideTransition
  ],

  data() {
    return {
      langs,
      env: process.env
    }
  }
}
</script>
