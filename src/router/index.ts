import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

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
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    /*scrollBehavior(to, from, savedPosition) {
      console.log(savedPosition);
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0, left: 0 };
      }
    },*/
    /*scrollBehavior(to, from, savedPosition) {
      const element = document.querySelector('#q-app');
      if (savedPosition) {
        const { top, left } = savedPosition;
        element.scrollTo({
          top,
          left,
          behavior: 'smooth',
        });
      } else {
        return { top: 0 };
      }
    },*/
    /*scrollBehavior: (to, from, savedPosition) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (savedPosition) {
            resolve(savedPosition);
          } else {
            resolve({ top: 0, left: 0 });
          }
        }, 600); // inelegant, but may work
      });
    },*/
    /*scrollBehavior: (to, from, savedPosition) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //const element = document.querySelector('#q-app');
          const element = document.querySelector('main');
          console.log(element);
          if (savedPosition) {
            const { top, left } = savedPosition;
            element?.scrollTo({
              top,
              left,
              behavior: 'smooth',
            });
          } else {
            return { top: 0 };
          }
        }, 600); // inelegant, but may work
      });
    },*/
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  return Router;
});
