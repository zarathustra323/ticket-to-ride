import Vue from 'vue';
import VueRouter from 'vue-router';
import userService from '../services/user';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue'),
    meta: { whenAuthed: { then: 'games.index', otherwise: 'user.login' } },
  },
  {
    // always be open - perhaps log user out if this fails
    path: '/authenticate',
    name: 'authenticate',
    component: () => import(/* webpackChunkName: "authenticate" */ '../views/authenticate.vue'),
  },
  {
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/error.vue'),
    props: true,
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/user.vue'),
    children: [
      {
        path: 'login',
        name: 'user.login',
        component: () => import(/* webpackChunkName: "user.login" */ '../views/user/login.vue'),
        meta: { whenAuthed: { then: 'games.index', otherwise: true } },
      },
      {
        path: 'logout',
        name: 'user.logout',
        component: () => import(/* webpackChunkName: "user.logout" */ '../views/user/logout.vue'),
        meta: { whenAuthed: { then: true, otherwise: 'user.login' } },
      },
      {
        path: 'register',
        name: 'user.register',
        component: () => import(/* webpackChunkName: "user.register" */ '../views/user/register.vue'),
        meta: { whenAuthed: { then: 'games.index', otherwise: true } },
      },
    ],
  },
  {
    path: '/games',
    component: () => import(/* webpackChunkName: "games" */ '../views/games.vue'),
    meta: { whenAuthed: { then: true, otherwise: 'user.login' } },
    children: [
      {
        path: '',
        name: 'games.index',
        component: () => import(/* webpackChunkName: "games.index" */ '../views/games/index.vue'),
        children: [
          {
            path: 'new',
            name: 'games.new',
            component: () => import(/* webpackChunkName: "games.new" */ '../views/games/create.vue'),
          },
        ],
      },
    ],
  },
  {
    // always be open
    path: '*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/not-found.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const matched = to.matched.find((record) => record.meta.whenAuthed);
  if (matched) {
    try {
      const isLoggedIn = await userService.isLoggedIn();
      const { then, otherwise } = matched.meta.whenAuthed;

      if (isLoggedIn) {
        if (then === true) return next();
        return next({ name: then });
      }
      if (otherwise === true) return next();
      return next({ name: otherwise });
    } catch (e) {
      next({ name: 'error', params: { error: e } });
    }
  } else {
    next();
  }
  return null;
});

export default router;
