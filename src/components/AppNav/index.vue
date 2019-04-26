<template>
  <div>
    <template v-for="(item, index) in menu">
      <router-link :to="item.link" :key="index">
        <button>{{ item.label }}</button>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    menu: Array
  }
}
</script>
