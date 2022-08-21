import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Homepage.vue'
import Eurasier from '../views/Eurasier.vue'
import Walks from '../views/Walks.vue'
import AboutUs from '../views/About/AboutUs.vue'
import AboutDogs from '../views/About/AboutDogs.vue'
import Breeding from '../views/Breeding/Breeding.vue'
import A_Puppies from '../views/Breeding/A_Puppies.vue'
import Contact from '../views/Infos/Contact.vue'
import Datenschutz from '../views/Infos/Datenschutz.vue'
import Impressum from '../views/Infos/Impressum.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/der-eurasier',
    name: 'Eurasier',
    component: Eurasier
  },
  {
    path: '/spaziergaenge',
    name: 'Walks',
    component: Walks
  },
  {
    path: '/ueber-uns/zuechter',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/ueber-uns/hunde',
    name: 'AboutDogs',
    component: AboutDogs
  },
  {
    path: '/unsere-zuchtstaette/zuchtstaette',
    name: 'Breeding',
    component: Breeding
  },
  {
    path: '/unsere-zuchtstaette/a-wurf',
    name: 'A_Puppies',
    component: A_Puppies
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/dsgvo',
    name: 'Datenschutz',
    component: Datenschutz
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
