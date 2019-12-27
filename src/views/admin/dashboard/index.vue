<template>
  <page-container :type="type">
    <div v-if="header" slot="header">Header</div>
    <div v-if="aside" slot="aside">Aside</div>
    <h1>PageContainer</h1>
    <p>
      <b>Type：</b>
      <el-radio-group v-model="type" size="medium">
        <el-radio-button label="card">card</el-radio-button>
        <el-radio-button label="ghost">ghost</el-radio-button>
        <el-radio-button label="none">none</el-radio-button>
      </el-radio-group>
    </p>
    <p>
      <b>Header：</b>
      <el-switch v-model="header" />
    </p>
    <p>
      <b>Aside：</b>
      <el-switch v-model="aside" />
    </p>
    <p>
      <b>Footer：</b>
      <el-switch v-model="footer" />
    </p>
    <el-divider />
    <div v-if="footer" slot="footer">Footer</div>
  </page-container>
</template>

<script>
import PageContainer from '../$index/components/PageContainer'

export default {
  data() {
    return {
      header: true,
      footer: true,
      aside: true,
      type: 'card'
    }
  },
  components: {
    PageContainer
  }
}
</script>
