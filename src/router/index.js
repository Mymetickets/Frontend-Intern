import { createRouter, createWebHashHistory } from 'vue-router'
import aboutRoutes from './def-routes'
import homeRoutes from './def-routes'
import loginRoutes from './auth'
import registerRoutes from './auth'


const routes = [
    { path: '/', redirect: '/register' }, 
   ...aboutRoutes,
   ...homeRoutes,
   ...loginRoutes,
    ...registerRoutes
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
