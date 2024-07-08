<template>
  <div>
    <h1>Task List</h1>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id">
        <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.title }}</span>
        <button class="task-button" @click="toggleCompletion(task.id)">Toggle Complete</button>
        <button class="task-button" @click="removeTask(task.id)">Delete</button>
      </li>
    </ul>
    <input v-model="newTaskTitle" placeholder="New task title" />
    <button @click="submitTask">Add Task</button>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  data() {
    return {
      newTaskTitle: '',
      tasks: [
        { id: 1, title: 'Initial Task 1', completed: false },
        { id: 2, title: 'Initial Task 2', completed: true }
      ]
    };
  },
  methods: {
    submitTask() {
      if (this.newTaskTitle) {
        this.tasks.push({
          id: Date.now(),
          title: this.newTaskTitle,
          completed: false
        });
        this.newTaskTitle = '';
      }
    },
    toggleCompletion(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  }
};
</script>

<style scoped>
.task-list {
  list-style-type: none;
  padding: 0;
}

.task-list li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.task-list li span {
  flex-grow: 1;
}

.task-button {
  margin-left: 10px;
}
</style>
