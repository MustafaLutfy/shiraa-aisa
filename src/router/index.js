import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Showroom from '../views/Showroom.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/showroom', name: 'Showroom', component: Showroom },
  { path: '/products', name: 'Products', component: Products },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
