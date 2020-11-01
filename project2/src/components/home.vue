<template>
  <div id="home">
    <router-link to="/text1" class="aaa">父传子</router-link>
    <router-link to="/text3" class="aaa">web</router-link>
    <router-link to="/task1" class="aaa">水箱</router-link>
    <router-link to="/task2" class="aaa">圆环图</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style>
#home{
  margin-top: 100px;
  margin-left: 90px;
}
#home .aaa{
    margin-right: 10px;
}
</style>