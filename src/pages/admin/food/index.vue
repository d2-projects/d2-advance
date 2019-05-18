<template>
  <!-- for router-view refresh -->
  <div :key="food" class="banner-container">
    <div style="font-size: 128px"><i :class="'el-icon-' + food" /></div>
    <h2>{{ foodName }}</h2>
    <h1>Collection demo</h1>
  </div>
</template>

<script>
import { get, startCase } from 'lodash'

export default {
  computed: {
    foodName() {
      return startCase(this.food)
    },
    food() {
      return get(this, '$route.params.food')
    }
  }
}
</script>
