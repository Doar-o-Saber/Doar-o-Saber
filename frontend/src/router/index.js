import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ProgramacaoCompleta from '../components/ProgramacaoCompleta.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/programacao',
    name: 'ProgramacaoCompleta',
    component: ProgramacaoCompleta
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router

