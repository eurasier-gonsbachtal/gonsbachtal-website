<template>
    <div class="menu-item" @mouseover="isOpen = true" @mouseleave="isOpen = false">
        <p :class="{active: isActive[index]}"> {{ title }} <i class="fa-solid fa-chevron-down"></i></p>
        <transition name="fade" appear>
            <div class="sub-menu" v-if="isOpen">
                <div class="menu-item" v-for="(item, i) in items" :key="i">
                    <router-link :to="item.link" @click="isActive[index] = true; isActive[nindex] = false">{{item.title}}</router-link>
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script>
export default {
    name: "dropdown",
    props: ['title', 'items', 'isActive', 'index', 'nindex'],
    data() {
        return {
            isOpen: false
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

nav .menu-item .sub-menu {
    background-color: var(--backgroundColor);
    border-radius: 0px 0px 8px 8px;
    position: absolute;
    top: calc(100% + 4px);
    width: 100%;
    box-shadow: 0px 8px 8px -4px var(--mainText);
    z-index: 100;
}

nav .sub-menu a {
    width: 100%;
}

nav p {
    padding: 8px 16px 4px 16px;
    margin: 0px 4px 4px 4px;
    margin-bottom: 4px;
    text-decoration: none;
    color: var(--mainText);
    font-size: 1.2em;
}

nav p:hover {
    color: var(--focusedText);
}

nav p.active {
    color: var(--mainText);
    border-bottom: 2px solid var(--mainText);
}

.fade-enter-active, .fade-leave-active {
    transition: all .5s ease-out;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>