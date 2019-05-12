<template>
  <div class="banner-container" :key="food">
    <h2>{{ food }}</h2>
  </div>
</template>

<script>
import { get } from 'lodash'

export default {
  computed: {
    food() {
      return get(this, '$route.params.food')
    }
  }
}
</script>
