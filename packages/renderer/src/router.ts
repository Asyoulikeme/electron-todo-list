import {createRouter, createWebHashHistory} from 'vue-router';
import TodoList from '@/components/TodoList.vue';

const routes = [
  {path: '/', name: 'TodoList', component: TodoList},
  {path: '/about', name: 'About', component: () => import('@/components/About.vue')}, // Lazy load route component
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
