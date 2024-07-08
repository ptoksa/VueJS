<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Add some basic styling */
body {
  font-family: Arial, sans-serif;
}
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
input {
  margin-right: 10px;
}
button {
  margin-left: 10px;
}
</style>
