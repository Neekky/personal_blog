<template>
  <div id="app">
    <my-header class="header"></my-header>
    <div class="content">
      <router-view/>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style  scoped lang="less">
@import "./styles/base.less";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('/static/img/home/bgPicture.jpeg');
  background-repeat: round;
  height: 100%;
  width: 100%;
}
</style>
