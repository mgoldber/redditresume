import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHomePage from '@/components/pages/TheHomePage.vue'
import TheJobsPage from '@/components/pages/TheJobsPage.vue'
import Single from '@/views/Single'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: TheHomePage
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: TheJobsPage
  },
  {
    path: "/story/:id",
    name: "Single",
    component: Single
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
