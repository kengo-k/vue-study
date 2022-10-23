import { createRouter, createWebHashHistory } from 'vue-router'
import Topic01VBind from '../views/Topic01VBind.vue'

const routes = [
  {
    path: '/',
    name: 'Topic01VBind',
    component: Topic01VBind
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
