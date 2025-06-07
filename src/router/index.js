import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/calendars',
      name: 'calendars',
      component: () => import('../views/CalendarsView.vue'),
    },
    {
      path: '/lightsword',
      name: 'lightsword',
      component: () => import('../views/LightSword.vue'),
    },
    {
      path: '/BondedRing',
      name: 'BondedRing',
      component: () => import('../views/BondedRing.vue'),
    },
  ],
})

export default router
