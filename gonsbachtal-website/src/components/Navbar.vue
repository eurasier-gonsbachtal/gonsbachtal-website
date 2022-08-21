<template>
  <nav id="navbar">
    <div class="menu-item">
      <router-link to="/"  @click="active = [false, false]">Startseite</router-link>
    </div>

    <Dropdown title="Über uns" :isActive="active" :items="abouts" :index="0" :nindex="1"/>

    <Dropdown title="Unsere Zuchtstätte" :isActive="active" :items="breeding" :index="1" :nindex="0"/>

    <div class="menu-item">
        <router-link to="/der-eurasier" @click="active = [false, false]">Der Eurasier</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/spaziergaenge" @click="active = [false, false]">Spaziergänge</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/kontakt" @click="active = [false, false]">Kontakt</router-link>
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
  data () {
    return {
      active: [false, false],
      abouts: [
        {
          title: "Über uns",
          link: "/ueber-uns/zuechter"
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
      ]
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--backgroundColor);
  padding: 8px;
  margin-bottom: 0px;
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

nav a.router-link-exact-active, nav a.router-link-active {
  color: var(--mainText);
  border-bottom: 2px solid var(--mainText);
}

</style>