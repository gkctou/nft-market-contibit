import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/PageLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Hello.vue') },
      { path: 'login', component: () => import('../pages/Login.vue') },
      { path: 'register', component: () => import('../pages/Register.vue') },
      { path: 'component', component: () => import('../pages/Component.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/Error404.vue'),
  },
];

export default routes;
