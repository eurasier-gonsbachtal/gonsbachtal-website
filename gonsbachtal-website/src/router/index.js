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
    component: HomePage,
    meta: {
      title: 'Eurasier vom Gonsbachtal - Eurasierzucht in Mainz',
      metaTags: [
        {
          name: 'description',
          content: 'Herzlich Willkommen auf der Homepage unserer Zuchtstätte Eurasier vom Gonsbachtal. Schauen Sie sich um, entdecken und verlieben Sie sich in die wunderbare Hunderasse Eurasier - wie auch wir es getan haben und lernen Sie uns und unsere Zuchtstätte kennen.'
        },
        {
          property: 'og:description',
          content: 'Herzlich Willkommen auf der Homepage unserer Zuchtstätte Eurasier vom Gonsbachtal. Schauen Sie sich um, entdecken und verlieben Sie sich in die wunderbare Hunderasse Eurasier - wie auch wir es getan haben und lernen Sie uns und unsere Zuchtstätte kennen.'
        }
      ]
    }
  },
  {
    path: '/der-eurasier',
    name: 'Eurasier',
    component: Eurasier,
    meta: {
      title: 'Der Eurasier',
      metaTags: [
        {
          name: 'description',
          content: 'Der Eurasier ist die jüngste deutsche Hunderasse und wurde von Beginn an zielgerichtet als Familienhund gezüchtet. Der Eurasier teilt den Alltag mit seinen Menschen. Für Zwingerhaltung oder langes Alleinsein ist er nicht geschaffen.'
        },
        {
          property: 'og:description',
          content: 'Der Eurasier ist die jüngste deutsche Hunderasse und wurde von Beginn an zielgerichtet als Familienhund gezüchtet. Der Eurasier teilt den Alltag mit seinen Menschen. Für Zwingerhaltung oder langes Alleinsein ist er nicht geschaffen.'
        }
      ]
    }
  },
  {
    path: '/spaziergaenge',
    name: 'Walks',
    component: Walks,
    meta: {
      title: 'Spaziergänge',
      metaTags: [
        {
          name: 'description',
          content: 'Wir planen ca. alle zwei Monate Spaziergänge im Umrkreis von Rüüdesheim am Rhein, Mainz, Hochheim und drumherum. Alte, junge Menschen und Hunde (jeder Rasse) heißen wir gerne Willkommen.'
        },
        {
          property: 'og:description',
          content: 'Wir planen ca. alle zwei Monate Spaziergänge im Umrkreis von Rüüdesheim am Rhein, Mainz, Hochheim und drumherum. Alte, junge Menschen und Hunde (jeder Rasse) heißen wir gerne Willkommen.'
        }
      ]
    }
  },
  {
    path: '/ueber-uns/hunde',
    name: 'AboutDogs',
    component: AboutDogs,
    meta: {
      title: 'Unsere Hunde',
      metaTags: [
        {
          name: 'description',
          content: 'Hier erfahren Sie alles über unsere Hunde. Diese bilden das Herz unserer Zuchtstätte.'
        },
        {
          property: 'og:description',
          content: 'Hier erfahren Sie alles über unsere Hunde. Diese bilden das Herz unserer Zuchtstätte.'
        }
      ]
    }
  },
    {
    path: '/ueber-uns/familie-bohland',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      title: 'Familie Bohland',
      metaTags: [
        {
          name: 'description',
          content: 'Ute & Klaus Bohland Arzthelfering trifft Feuerwehrmann. 1997 beschlossen wir, unsere Zweisamkeit mit einem Hund zu bereichern...'
        },
        {
          property: 'og:description',
          content: 'Ute & Klaus Bohland Arzthelfering trifft Feuerwehrmann. 1997 beschlossen wir, unsere Zweisamkeit mit einem Hund zu bereichern...'
        }
      ]
    }
  },
  {
    path: '/unsere-zuchtstaette/zuchtstaette',
    name: 'Breeding',
    component: Breeding,
    meta: {
      title: 'Unsere Zuchtstätte',
      metaTags: [
        {
          name: 'description',
          content: 'Mit unserer dritten Eurasierhündin Khaleesi entschieden wir uns 2021 für die Eurasierzucht. Nach reichlicher familieninterner Debatte stand dann auch die wichtigste Entscheidung in diesem Rahmen fest, der Name unserer Zuchtstätte'
        },
        {
          property: 'og:description',
          content: 'Mit unserer dritten Eurasierhündin Khaleesi entschieden wir uns 2021 für die Eurasierzucht. Nach reichlicher familieninterner Debatte stand dann auch die wichtigste Entscheidung in diesem Rahmen fest, der Name unserer Zuchtstätte'
        }
      ]
    }
  },
  {
    path: '/unsere-zuchtstaette/a-wurf',
    name: 'A_Puppies',
    component: A_Puppies,
    meta: {
      title: 'A-Wurf',
      metaTags: [
        {
          name: 'description',
          content: 'Unser allererster Wurf - lernen sie die sieben Zwerge kennen von klein bis groß.'
        },
        {
          property: 'og:description',
          content: 'Unser allererster Wurf - lernen sie die sieben Zwerge kennen von klein bis groß.'
        }
      ]
    }
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Kontakt',
      metaTags: [
        {
          name: 'description',
          content: 'Hier finden Sie unsere Kontaktdaten. Ansprechpartner: Klaus Bohland'
        },
        {
          property: 'og:description',
          content: 'Hier finden Sie unsere Kontaktdaten. Ansprechpartner: Klaus Bohland'
        }
      ]
    }
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum,
    meta: {
      title: 'Impressum',
      metaTags: [
        {
          name: 'description',
          content: 'Impressum'
        },
        {
          property: 'og:description',
          content: 'Impressum'
        }
      ]
    }
  },
  {
    path: '/dsgvo',
    name: 'Datenschutz',
    component: Datenschutz,
    meta: {
      title: 'Datenschutzerklärung',
      metaTags: [
        {
          name: 'description',
          content: 'DSGVO'
        },
        {
          property: 'og:description',
          content: 'DSGVO'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
