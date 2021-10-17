<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style>
html{
  background: url("http://chat-image.muchen7.cn/image/background.jpg?imageView2/0/format/webp/q/90") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-width: 280px;
  width: 100%;
  height: 100%;
}
</style>