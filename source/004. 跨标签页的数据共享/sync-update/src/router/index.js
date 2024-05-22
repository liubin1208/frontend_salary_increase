import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../view/list.vue'),
  },
  {
    path: '/new',
    component: () => import('../view/add.vue'),
  },
  {
    path: '/edit/:id',
    component: () => import('../view/edit.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
