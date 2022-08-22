<template>
    <div class="container">
        <div class="card">
            <h4>1.Woche</h4>
            <img :src="images.woche1" alt="1 woche alt">
        </div>
        <div class="card" v-if="images.abgabe">
            <h4>Abgabe</h4>
            <img :src="images.abgabe" alt="Kurz vor Abgabe">
        </div>
        <div class="card" v-if="images.halbesJahr">
            <h4>1/2 Jahr</h4>
            <img :src="images.halbesJahr" alt="Mit einem halben Jahr">
        </div>
        <div class="card" v-if="images.jahr">
            <h4>1 Jahr</h4>
            <img :src="images.jahr" alt="Mit einem Jahr">
        </div>
        <div class="card" v-if="images.todesTag">
            <h4 class="death"><i class="fa-solid fa-cross"></i>{{ images. todesTag }}</h4>
            <img :src="images.todesTagImg" alt="">
        </div>

        <div class="card" v-if="images.todesTagDescr">
            <p>{{images.todesTagDescr}}</p>
        </div>
    </div>
    

</template>

<script>
export default {
    name: "ImageCard",
    props: ["images"]
}
</script>


<style scoped>
:root {
  --backgroundColor: #dcdece;
  --mainText: #333D29;
  --mainTextLight: #70875A;
  --linkText: #936639;
  --focusedText: #582F0E;
  --higlightedText: #04A0A2;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: space-between;
    gap: 8px 8px;
}

img {
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    object-fit: contain;
}

h4 {
    padding: 8px;
    background-color: var(--backgroundColor);
    border-radius: 8px 8px 0px 0px;
    margin: 0px;
    display: flex;
}

.death {
    background-color: #B3B3A7;
}

i {
    color: var(--mainText);
    font-size: 0.8em;
}

</style>