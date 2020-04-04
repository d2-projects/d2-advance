<template>
  <el-container class="page-container" :class="dynamicClass">
    <el-header v-if="$slots.header" class="header">
      <slot name="header" />
    </el-header>
    <el-container class="center-wapper">
      <el-aside v-if="$slots.aside" width="auto" class="aside">
        <slot name="aside" />
      </el-aside>
      <el-main class="body" :class="bodyClass">
        <slot />
      </el-main>
    </el-container>
    <el-footer v-if="$slots.footer" class="footer">
      <slot name="footer" />
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'PageContainer',
  props: {
    type: {
      type: String,
      default: 'card' // card | ghost | none
    },
    noBodyPadding: {
      type: Boolean,
      default: false
    },
    bodyClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    dynamicClass() {
      return {
        [this.type]: true,
        'no-body-padding': this.noBodyPadding
      }
    }
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>
<style lang="stylus" src="./themes.styl"></style>
