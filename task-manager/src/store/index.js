// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    toggleTaskCompletion(state, taskId) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    }
  },
  actions: {
    async fetchTasks({ commit }) {
      try {
        // Example: Fetch tasks from an API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const tasks = await response.json();
        // Convert fetched tasks if necessary
        const formattedTasks = tasks.map(task => ({
          id: task.id,
          title: task.title,
          completed: task.completed
        }));
        commit('setTasks', formattedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async addTask({ commit }, task) {
      try {
        // Example: Post new task to API and then commit to state
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(task)
        });
        const newTask = await response.json();
        commit('addTask', { ...task, id: newTask.id });
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },
    async deleteTask({ commit }, taskId) {
      try {
        // Example: Delete task from API and then commit to state
        await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
          method: 'DELETE'
        });
        commit('deleteTask', taskId);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
    async toggleTaskCompletion({ commit }, taskId) {
      try {
        const task = this.state.tasks.find(task => task.id === taskId);
        if (!task) return;
        const updatedTask = { ...task, completed: !task.completed };
        await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedTask)
        });
        commit('toggleTaskCompletion', taskId);
      } catch (error) {
        console.error('Error toggling task completion:', error);
      }
    }
  },
  getters: {
    tasks: state => state.tasks
  }
});
