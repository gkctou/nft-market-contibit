import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';
import { useLayoutStore } from 'stores/layout';
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll;
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    // scrollBehavior: () => ({ top: 0 }), // , left: 0,el: '#Top'
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition)
        return savedPosition
      const el = document.querySelector('.q-page-container')
      // const target = getScrollTarget(el!)
      // const offset = el!['offsetTop']
      // const duration = 0;
      if (!el)
        return { top: 0, left: 0 }
      setVerticalScrollPosition(getScrollTarget(el), 0, 0);
      // setTimeout(() => setVerticalScrollPosition(target, offset, duration), 0);
    },
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });
  Router.beforeEach((to, from, next) => {
    const layoutStore = useLayoutStore();
    layoutStore.setLeftDrawer(false);
    layoutStore.setRightDrawer(false);
    next();
  });
  return Router;
});
