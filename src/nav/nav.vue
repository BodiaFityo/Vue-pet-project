<template>
  <div>
    <router-link to="/">About</router-link>
    <router-link to="/helloword">HelloWord</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
