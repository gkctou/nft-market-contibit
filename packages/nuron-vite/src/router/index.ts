import { createRouter, createWebHistory } from 'vue-router';
// import HelloWorld from '../components/HelloWorld.vue';

const routes = [
    {
        path: '/',
        name: 'helloWorld',
        component: () => import('../pages/ExploreFourSide.vue'),
        meta: {
            title: 'Hello World',
        },
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string;
    next();
    window.scrollTo(0, 0)
});

export default router