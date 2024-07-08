<!-- src/components/TaskDetails.vue -->
<template>
  <div v-if="task">
    <h1>Edit Task</h1>
    <input v-model="task.title" placeholder="Task Title" />
    <button @click="editTask(task)">Save</button>
    <router-link to="/tasks">Back to Task List</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['id'],
  computed: {
    task() {
      return this.getTaskById(parseInt(this.id));
    },
    ...mapGetters(['getTaskById'])
  },
  methods: {
    ...mapActions(['editTask'])
  }
};
</script>
