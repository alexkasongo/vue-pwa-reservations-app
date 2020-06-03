import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/hotels',
    name: 'Hotels',
    component: () => import(/* webpackChunkName: "hotels" */ '../views/Hotels.vue')
  },
  {
    path: '/night-clubs',
    name: 'NightClubs',
    component: () => import(/* webpackChunkName: "hotels" */ '../views/NightClubs.vue')
  },
  {
    path: '/tourism',
    name: 'Tourism',
    component: () => import(/* webpackChunkName: "hotels" */ '../views/Tourism.vue')
  },
  {
    path: '/transportation',
    name: 'Transportation',
    component: () => import(/* webpackChunkName: "hotels" */ '../views/Transportation.vue')
  },
  {
    path: '/security',
    name: 'Security',
    component: () => import(/* webpackChunkName: "hotels" */ '../views/Security.vue')
  },
  {
    path: '/restaurant/:restId',
    name: 'Restaurant',
    component: () => import(/* webpackChunkName: "hotels" */ '../views/Restaurant.vue')
  },
  {
    path: '/all-restaurants/:restId',
    name: 'RestaurantsAll',
    component: () => import(/* webpackChunkName: "hotels" */ '../views/RestaurantsAll.vue')
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: () => import(/* webpackChunkName: "hotels" */ '../views/Restaurants.vue')
  },
  {
    path: '/deep-search',
    name: 'DeepSearch',
    component: () => import(/* webpackChunkName: "hotels" */ '../views/DeepSearch.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
