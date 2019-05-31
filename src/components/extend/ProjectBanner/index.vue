<template>
  <div class="banner-container">
    <h2>
      <span style="color: #409eff">D2</span
      ><span style="color: #35495e">Advance</span>
    </h2>
    <p>
      <span style="color: #c0c4cc; font-weight: 100;">@{{ version }}</span>
    </p>
    <p style="text-align: center">
      Advance, convention first, colourful front-end practice. be inspired by
      <el-link
        type="primary"
        href="https://d2admin.fairyever.com"
        target="_blank"
        >D2Admin</el-link
      >
      :)
    </p>
    <repo-badge />
  </div>
</template>

<script>
import RepoBadge from '@/components/extend/RepoBadge'
import { version } from '@/../package.json'

export default {
  data() {
    return {
      version
    }
  },
  components: {
    RepoBadge
  }
}
</script>
