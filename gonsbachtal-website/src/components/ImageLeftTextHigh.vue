<template>
<div>
    <div class="imageText">
        <img :src="content.img" alt="">

        <div class="text">
            <h1>{{ content.title }}</h1>
            <div class="date">
                <p class="light">{{content.birthdate }}</p>
                <i class="fa-solid fa-cake-candles"></i>
                <p v-if="content.deathdate" style="padding: 0px 4px 0px 4px"> - </p>
                <p class="light" >{{ content.deathdate }}</p>
                <i class="fa-solid fa-cross"  v-if="content.deathdate"></i>
            </div>
            <p v-html="content.description"></p>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: "ImageLeftTextHigh",
    props: ["content"]
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

img {
    width: 100%;
    background-color: var(--backgroundColor);
    border-radius: 8px;
    object-fit: cover;
}

.imageText {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0px 32px;
    margin-bottom: 64px;
}

.date {
    display: grid;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    grid-template-columns: auto auto auto auto auto;
    gap: 0px 2px;
}

.date i {
    font-size: 0.8em;
    color: var(--mainTextLight)
}

h1 {
    margin-bottom: 0px;
}

p.light {
    margin-bottom: 16px;
    color: var(--mainTextLight);
}
</style>