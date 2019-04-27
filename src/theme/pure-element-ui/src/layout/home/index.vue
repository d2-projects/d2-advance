<template>
  <div>
    <el-menu router :default-active="$route.path" mode="horizontal">
      <template v-for="(item, index) in menu">
        <el-menu-item :index="item.link" :key="index">
          <template slot="title">
            <i v-if="item.icon" :class="'el-icon-' + item.icon"></i>
            <span class="label" v-if="item.label">{{ item.label }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
    <fade-transition mode="out-in">
      <slot />
    </fade-transition>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'

export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  components: {
    FadeTransition
  }
}
</script>

<style lang="stylus" scoped>
.label
  text-transform capitalize
</style>
