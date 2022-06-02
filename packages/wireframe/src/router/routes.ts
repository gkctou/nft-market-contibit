import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    // component: () => import('../layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Hello.vue') },
      // { path: 'list', component: () => import('../pages/List.vue') }
    ],
  },
  {
    path: '/blank',
    // component: () => import('../layouts/MainLayout.vue'),
    component: () => import('../layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Hello.vue') },
      // { path: 'list', component: () => import('../pages/List.vue') }
    ],
  },
  {
    path: '/page',
    // component: () => import('../layouts/MainLayout.vue'),
    component: () => import('../layouts/PageLayout.vue'),
    // component: () => import('../layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/LoginRegister.vue') },
      // { path: 'list', component: () => import('../pages/List.vue') }
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
