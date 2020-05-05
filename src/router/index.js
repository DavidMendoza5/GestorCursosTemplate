import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/VerCursos',
    name: 'VerCursos',
    component: () => import('../views/VerCursos.vue')
  },
  {
    path: '/VerDocentes',
    name: 'VerDocentes',
    component: () => import('../views/VerDocentes.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
