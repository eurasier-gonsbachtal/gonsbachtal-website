<template>
    <div class="imageText">
        <div class="image">
            <img :src="info.img" alt="info.img_description">
            <p class="light" style="margin-bottom: 0px;">{{ info.img_description}}</p>
        </div>
        <div class="text">
            <h1 v-if="info.title">{{ info.title }}</h1>
            <p v-html="info.description"></p>
            <p v-if="info.contact_link">Haben Sie Fragen? <a class="link" @click="$router.push('/kontakt')">Kontaktieren</a> Sie uns!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ImageTextWide",
    props: ["info"]
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
    object-fit: contain;
}

.imageText {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: space-between;
    gap: 16px 32px;
    margin-bottom: 64px;
}

.link {
    text-decoration: underline;
}
</style>