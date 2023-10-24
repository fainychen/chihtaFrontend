import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '../views/FrontPage.vue'
import HomePage from '../views/HomePage.vue'
import Service from '../views/Service.vue'
import CaseStudy from '../views/CaseStudy.vue'
import Location from '../views/Location.vue'
import ContactUs from '../views/ContactUs.vue'
import Chihta from '../views/Chihta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FrontPage',
    component: FrontPage,
    children: [
      {
        path: '/homePage',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/service',
        name: 'Service',
        component: Service
      },
      {
        path: '/caseStudy',
        name: 'CaseStudy',
        component: CaseStudy
      },
      {
        path: '/location',
        name: 'Location',
        component: Location
      },
      {
        path: '/contactUs',
        name: 'ContactUs',
        component: ContactUs
      },
      {
        path: '/chihta',
        name: 'Chihta',
        component: Chihta
      },
    ]
  },

  {path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

export default router
