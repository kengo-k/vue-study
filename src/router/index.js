import { createRouter, createWebHashHistory } from 'vue-router'
import Topic01VBind from '../views/Topic01VBind.vue'
import Topic02VShow from '../views/Topic02VShow.vue'

const routes = [
  {
    path: '/',
    name: 'Topic01VBind',
    component: Topic01VBind
  },
  {
    path: '/01',
    name: 'Topic01VBind',
    component: Topic01VBind
  },
  {
    path: '/02',
    name: 'Topic02VShow',
    component: Topic02VShow
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
