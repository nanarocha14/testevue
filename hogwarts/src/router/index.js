import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Sonserina from '../views/Sonserina.vue'
import Grifinoria from '../views/Grifinoria.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/sonserina',
    name: 'Sonserina',
    component: Sonserina
    
  },
  {
    path: '/grifinoria',
    name: 'Grifinoria',
    component: Grifinoria
  }


]

const router = new VueRouter({
  mode: 'history',
  base: 'http://localhost:8080',
  routes
})

export default router
