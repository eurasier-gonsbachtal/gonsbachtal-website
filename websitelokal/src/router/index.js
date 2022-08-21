import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Homepage.vue'
import Eurasier from '../pages/Eurasier.vue'
import Walks from '../pagea/Walks.vue'
import AboutUs from '../pages/About/AboutUs.vue'
import AboutDogs from '../pages/About/AboutDogs.vue'
import Breeding from '../pages/Breeding/Breeding.vue'
import A_Puppies from '../pages/Breeding/A_Puppies.vue'
import Contact from '../pages/Infos/Contact.vue'
import Datenschutz from '../pages/Infos/Datenschutz.vue'
import Impressum from '../pages/Infos/Impressum.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/ueber-uns',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/ueber-uns/dogs',
    name: 'AboutDogs',
    component: AboutDogs
  },
  {
    path: '/unsere-zuchtstaette',
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