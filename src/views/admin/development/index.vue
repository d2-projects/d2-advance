<template>
  <page-container>
    <template #header>
      <h1>{{ $t('Development') }} <i class="el-icon-magic-stick"></i></h1>
    </template>

    <h2>process.env</h2>
    <pre>{{ env }}</pre>
    <h2>URL Query State test</h2>

    <el-divider />

    <el-form :inline="true" :model="formInline">
      <el-form-item label="Username">
        <el-input
          v-model="formInline.user"
          placeholder="Username"
          :maxlength="20"
        ></el-input>
      </el-form-item>
      <el-form-item label="Region">
        <el-select v-model="formInline.region" placeholder="Region">
          <el-option label="Shanghai" value="shanghai"></el-option>
          <el-option label="Beijing" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Search</el-button>
      </el-form-item>
    </el-form>

    <pre>{{ hotQuery }}</pre>
    <!-- <p>{{ hotQueryMap }}</p> -->
  </page-container>
</template>

<script>
import { hotQueryMap } from '@/store/modules/admin/mixins'

export default {
  mixins: [hotQueryMap],
  inject: ['@adminContainer'],
  data() {
    return {
      env: process.env,
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  created() {
    this.formInline = { ...this.hotQuery }
  },
  methods: {
    onSubmit() {
      this.hotQuery = { ...this.formInline }
    }
  }
}
</script>
