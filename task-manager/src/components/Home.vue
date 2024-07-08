<!-- src/components/Home.vue -->
<template>
  <div>
    <h1>Welcome to Task Manager</h1>
    <router-link to="/tasks">Go to Tasks</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent' // Changed name
};
</script>
