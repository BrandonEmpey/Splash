<template>
  <div id="app">
    <router-view></router-view>
    <pool-add></pool-add>
    <customer-add></customer-add>
  </div>
</template>

<script>
import PoolAdd from "./components/PoolAdd.vue";
import CustomerAdd from "./components/CustomerAdd.vue";


export default {
  components: {
    CustomerAdd,
    PoolAdd},
  name: 'app'
}
</script>

<style>
#app {
  width: 100%;
  display: flex;
}
</style>
