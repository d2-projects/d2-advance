<template>
  <article>
    <el-switch v-model="longText" active-text="Long" inactive-text="Short" />
    <p v-for="i in row" :key="i">
      Magna enim elit proident deserunt ipsum elit officia eu in sit sint esse.
      Eu amet laboris laborum excepteur laborum sunt esse elit officia mollit
      enim est mollit minim. Tempor deserunt anim voluptate consectetur
      consectetur est id sit anim dolore sint. Magna cupidatat sunt in qui anim
      esse fugiat velit reprehenderit irure sint. Duis commodo eiusmod occaecat
      quis consectetur nostrud ex. Nulla adipisicing quis fugiat exercitation
      occaecat non eu fugiat. Dolor eiusmod aliqua enim non elit duis officia
      ullamco laboris.
    </p>
  </article>
</template>

<script>
export default {
  name: 'DemoArticle',
  computed: {
    row() {
      return this.longText ? 20 : 1
    }
  },
  data() {
    return {
      longText: true
    }
  }
}
</script>
