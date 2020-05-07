import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHomePage from '@/components/pages/TheHomePage.vue'
import TheJobsPage from '@/components/pages/TheJobsPage.vue'
import TheProjectsPage from '@/components/pages/TheProjectsPage.vue'
import TheAMAPage from '@/components/pages/TheAMAPage.vue'
import ADetailedPost from '@/components/cards/ADetailedPost.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      public: true
    },
    component: TheHomePage
  },
  {
    path: '/home/:subredditId',
    name: 'homeSub',
    component: TheHomePage
  },
  {
    path: '/jobs/:subredditId',
    name: 'jobs',
    component: TheJobsPage
  },
  {
    path: '/projects/:subredditId',
    name: 'projects',
    component: TheProjectsPage
  },
  {
    path: '/AMA/:subredditId',
    name: "ama",
    component: TheAMAPage
  },
  {
    path: "/post/:subredditName/:id/",
    name: "ADetailedPost",
    component: ADetailedPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () { // This makes sure that new pages open at the top of the page as opposed to the bottom
    return { x: 0, y: 0 }
  },
  routes
})

export default router
