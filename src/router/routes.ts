import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'launches',
        component: () => import('pages/launch/LaunchesPage.vue'),
      },
      {
        path: 'launches/upcoming',
        component: () => import('pages/launch/LaunchesUpcomingPage.vue'),
      },
      {
        path: 'launches/past',
        component: () => import('pages/launch/LaunchesPastPage.vue'),
      },
      {
        path: 'launches/:id',
        component: () => import('pages/launch/LaunchPage.vue'),
      },
      {
        path: 'launches/:id/fairings',
        component: () => import('pages/launch/LaunchFairingsPage.vue'),
      },
      {
        path: 'launches/:id/rocket/first-stage',
        component: () =>
          import('pages/launch/rocket/LaunchRocketFirstStagePage.vue'),
      },
      {
        path: 'launches/:id/rocket/second-stage',
        component: () =>
          import('pages/launch/rocket/LaunchRocketSecondStagePage.vue'),
      },
      {
        path: 'rockets',
        component: () => import('pages/rocket/RocketsPage.vue'),
      },
      {
        path: 'rockets/:id',
        component: () => import('pages/rocket/RocketPage.vue'),
      },
      {
        path: 'cores',
        component: () => import('pages/core/CoresPage.vue'),
      },
      {
        path: 'cores/:id',
        component: () => import('pages/core/CorePage.vue'),
      },
      {
        path: 'dragons',
        component: () => import('pages/dragon/DragonsPage.vue'),
      },
      {
        path: 'dragons/:id',
        component: () => import('pages/dragon/DragonPage.vue'),
      },
      {
        path: 'capsules',
        component: () => import('pages/capsule/CapsulesPage.vue'),
      },
      {
        path: 'capsules/:id',
        component: () => import('pages/capsule/CapsulePage.vue'),
      },
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
