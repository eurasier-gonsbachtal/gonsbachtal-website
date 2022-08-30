<template>
  <nav id="navbar">
    <i 
      class="fas fa-bars" 
      @click="showMenu()"> 
    </i>
    <img id="logo" src="../assets/Logo_Website_mitText.png" alt="">
    <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
      <div class="menu-item">
        <router-link to="/"  @click="active = [false, false]">Startseite</router-link>
      </div>

      <Dropdown title="Über uns" :items="abouts" :on="onUeberUns"/>

      <Dropdown title="Unsere Zuchtstätte" :items="breeding" :on="onZuchtstaette"/>

      <div class="menu-item">
          <router-link to="/der-eurasier" @click="active = [false, false]">Der Eurasier</router-link>
      </div>

      <div class="menu-item">
        <router-link to="/spaziergaenge" @click="active = [false, false]">Spaziergänge</router-link>
      </div>

      <div class="menu-item">
        <router-link to="/kontakt" @click="active = [false, false]">Kontakt</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown.vue'

export default {
  name: 'navbar',
  components: {
    Dropdown,
  },
  props: ["onUeberUns", "onZuchtstaette"],
  data () {
    return {
      abouts: [
        {
          title: "Über uns",
          link: "/ueber-uns"
        },
        {
          title: "Hunde",
          link: "/ueber-uns/hunde"
        }
      ],
      breeding: [
        {
          title: "Zuchtstätte",
          link: "/unsere-zuchtstaette/zuchtstaette"
        },
        {
          title: "A-Wurf",
          link: "/unsere-zuchtstaette/a-wurf"
        }
      ],
      showMobileMenu: false
    }
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>

<style>
:root {
  --backgroundColor: #dcdece;
  --mainText: #333D29;
  --mainTextLight: #70875A;
  --linkText: #936639;
  --focusedText: #582F0E;
  --higlightedText: #04A0A2;
}

nav a.router-link-exact-active:hover {
  color: var(--focusedText);
  border-bottom: 2px solid var(--focusedText);
}

nav {
  background-color: var(--backgroundColor);
  position: relative;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 8px;
  margin-bottom: 0px;
}

i.fa-bars {
  display: none;
}


@media screen and (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }

  i.fa-bars {
    display: block;
    text-align: right;
    padding: 0px 16px 0px 0px;
    font-size: 2em;
    position: absolute;
    top: 0;
    right: 0;
  }

  .open-menu {
    opacity: 1;
  }
  .closed-menu {
    display: none;
    opacity: 0;
    height: 0;
    padding: 0;
  }

  .closed-menu.menu-item {
    display: none;
  }

  nav .menu-item {
    position: static;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

}

nav .menu-item {
  position: relative;
  text-align: center;
  display: flex;
}

nav a {
  padding: 8px 16px 4px 16px;
  margin: 0px 4px 4px 4px;
  margin-bottom: 4px;
  text-decoration: none;
  color: var(--mainText);
  font-size: 1.2em;
}

nav a:hover {
  color: var(--focusedText);
}

nav a:active {
  color: var(--mainText);
}

nav a.router-link-exact-active, nav a.router-link-active {
  color: var(--mainText);
  border-bottom: 2px solid var(--mainText);
}

</style>