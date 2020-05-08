<template>
  <div id="app">
    <VuexMonitor/>
    <router-view/>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  body{
    margin: 80px;
  }
</style>
<script>
import VuexMonitor from './components/vuexMonitor'
export default {
  components: { VuexMonitor }
}
</script>
