<template>
  <PageMenu/>
  <PageContent/>
</template>

<script>
import PageMenu from './components/PageMenu.vue'
import PageContent from './components/PageContent.vue'

export default {
  name: 'App',
  components: {
    PageMenu,
    PageContent
  }
}
</script>

<style>
#app {
  display: flex;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
</style>
