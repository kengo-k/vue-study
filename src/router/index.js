import { createRouter, createWebHashHistory } from 'vue-router'
import Topic01VBind from '../views/Topic01VBind.vue'
import Topic02VShow from '../views/Topic02VShow.vue'
import Topic03VIf from '../views/Topic03VIf.vue'
import Topic04VFor from '../views/Topic04VFor.vue'

const routes = [
  { path: '/', name: 'Topic01VBind', component: Topic01VBind },
  { path: '/01', name: 'Topic01VBind', component: Topic01VBind },
  { path: '/02', name: 'Topic02VShow', component: Topic02VShow },
  { path: '/03', name: 'Topic03VIf', component: Topic03VIf },
  { path: '/04', name: 'Topic04VFor', component: Topic04VFor },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
