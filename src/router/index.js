import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHomePage from '@/components/pages/TheHomePage.vue'
import TheJobsPage from '@/components/pages/TheJobsPage.vue'
import ADetailedPost from '@/components/cards/ADetailedPost.vue'

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
    path: "/post/:id/",
    name: "ADetailedPost",
    component: ADetailedPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
