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
    path: '/contactanos',
    name: 'contactanos',
    component: () => import('../views/About.vue')
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: () => import('../views/Galeria.vue')
  },
  {
    path: '/galeriaDetalle',
    name: 'galeriaDetalle',
    component: () => import('../views/DetalleGaleria.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
