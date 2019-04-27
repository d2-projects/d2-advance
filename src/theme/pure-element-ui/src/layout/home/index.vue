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
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.label
  text-transform capitalize
</style>
