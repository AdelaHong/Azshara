import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import PageNotFound from './views/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "broadcast" */ './views/Broadcast')
    },
    {
      path: '/detail/:programId',
      name: 'detail',
      component: () => import(/* webpackChunkName: "programDetail" */'./views/ProgramDetail')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: PageNotFound
    }
  ]
})

router.afterEach((to) => {
  console.log(router.app)
  const app = router.app
  if (app && app.$store) {
    app.$store.commit('SET_BANNER_SHOW', to.name === 'home')
  }
})

export default router
