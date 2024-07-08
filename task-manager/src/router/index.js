// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/Home.vue';
import TaskList from '@/components/TaskList.vue';
import TaskDetails from '@/components/TaskDetails.vue';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/tasks', component: TaskList },
  { path: '/tasks/:id', component: TaskDetails, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
