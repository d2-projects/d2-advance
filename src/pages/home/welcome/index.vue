<template>
  <div class="banner-container">
    <h2>
      <span style="color: #409eff">D2</span
      ><span style="color: #35495e">Advance</span>
    </h2>
    <p>
      <span style="color: #c0c4cc; font-weight: 100;">@{{ version }}</span>
    </p>
    <p>
      Advance, convention first, colourful front-end practice. be inspired by
      D2Admin :)
    </p>
    <repo-badge />
  </div>
</template>

<script>
import RepoBadge from './components/RepoBadge'
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
