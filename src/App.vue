<template>
  <div id="app">
    <div id="scroller-wrapper" data-scrollbar>
      <transition name="el-fade-in-linear">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Scrollbar from 'smooth-scrollbar';

export default {
  name: 'App',
  mounted() {
    Scrollbar.initAll(document.getElementById("scroller-wrapper"));
    this.$router.beforeEach((to, from, next) => {
      Scrollbar.destroyAll()
      next()
    })
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: MicrosoftYaHeiLight;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  #scroller-wrapper{
    position: relative;
    height: 100vh;
    /* z-index: 101; */
  }
  .scrollbar-thumb{
    background-color: #F18D00 !important;
  }
</style>
