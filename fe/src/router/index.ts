import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import FolderView from '../views/FolderView.vue'

const routes = [
  { path: '/', component: MainView },
  { path: '/folder', component: FolderView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
