import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import PageNotFound from './views/NotFound'
import MyLayout from './views/My'

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
      component: () => import(/* webpackChunkName: "broadcast" */ './views/LiveTV')
    },
    {
      path: '/detail/:programId',
      name: 'detail',
      component: () => import(/* webpackChunkName: "programDetail" */'./views/LiveTV/ProgramDetail.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      component: MyLayout,
      children: [{
        path: '/user-info',
        name: 'userInfo',
        component: () => import(/* webpackChunkName: "UserInfo" */ './views/My/UserInfo.vue')
      }]

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
