import { createRouter, createWebHistory } from 'vue-router'
import Sailors from '../views/Sailors.vue'
import Recruits from '../views/Recruits.vue'
import Candidates from '../views/Candidates.vue'
import AddSailor from '../views/AddSailor.vue'

const routes = [
  {
    path: '/',
    name: 'Sailors',
    component: Sailors
  },
  {
    path: '/sailors/:id',
    name: 'Sailor',
    component: () => import('../views/Sailor.vue')
  },
  {
    path: '/add',
    name: 'AddSailor',
    component: AddSailor
  },
  {
    path: '/recruits',
    name: 'Recruits',
    component: Recruits
  },
  {
    path: '/candidates',
    name: 'Candidates',
    component: Candidates
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
