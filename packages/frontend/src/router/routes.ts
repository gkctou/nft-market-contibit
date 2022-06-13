import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Landing.vue') },
      // { path: 'input', component: () => import('components/InputCountDown.vue') },
      { path: 'login', component: () => import('pages/LoginRegister.vue') },
      { path: 'test', component: () => import('pages/IndexPage.vue') },
      { path: 'category', component: () => import('pages/NftCategory.vue') },
      { path: 'categories', component: () => import('pages/NftCategories.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
