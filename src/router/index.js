import { createRouter, createWebHashHistory } from 'vue-router'
import aboutRoutes from './modules/about'
import homeRoutes from './modules/home'
import loginRoutes from './modules/login'
import registerRoutes from './modules/register'


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
