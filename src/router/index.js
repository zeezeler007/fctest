import { createRouter, createWebHistory } from 'vue-router'

// Import page components
import HomeView from '../views/HomeView.vue'
import AboutPage from '../views/AboutPage.vue'
import InvestmentApproachPage from '../views/InvestmentApproachPage.vue'
import ProcurementPage from '../views/ProcurementPage.vue'
import ContactPage from '../views/ContactPage.vue'
import LoginPage from '../views/LoginPage.vue'
import housing from '../views/housing.vue'
import energy from '../views/energy.vue'
import FundsPage from '../views/FundsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/investment-approach',
      name: 'investment-approach',
      component: InvestmentApproachPage
    },
    {
      path: '/procurement',
      name: 'procurement',
      component: ProcurementPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/housing',
      name: '/housing',
      component: housing
    },
    {
      path: '/energy',
      name: 'energy',
      component: energy
    },
    {
      path: '/funds',
      name: 'funds',
      component: FundsPage
    }
  ],

   scrollBehavior(to, from, savedPosition) {
    return { top: 0 } }

})

export default router