<template>
    <div class="container">
        <div class="card">
            <div class="top">
                <h4>Mutter</h4>
                <p class="name">{{ mom.name }}</p>
                <p class="date">{{ mom.bday }}</p>
            </div>

            <div class="images">
                <img class="left" :src="mom.img_face" alt="Mutterhund">
                <img class="right" :src="mom.img_side" alt="Mutterhund">
            </div>
            
        </div>
        <div class="card">
            <div class="top">
                <h4>Vater</h4>
                <p class="name">{{ dad.name }}</p>
                <p class="date">{{ dad.bday }}</p>
            </div>
            <div class="images">
                <img class="left" :src="dad.img_face" alt="Vaterhund">
                <img class="right" :src="dad.img_side" alt="Vaterhund">
            </div>
            <div class="top">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DogParents",
    props: ["mom", "dad"]
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
    margin-bottom: 64px;
}

.top {
    background-color: var(--backgroundColor);
    border-radius: 8px 8px 0px 0px;
}

img {
    width: 100%;
    object-fit: contain;
}

h4 {
    margin: 0px;
    padding: 8px;
}

p {
    padding: 8px;
    margin: 0px;
}

.images {
    width: 100%;
}

.images img {
    width: 50%
}

img.left {
    border-radius: 0px 0px 0px 8px;
}

img.right {
    border-radius: 0px 0px 8px 0px;
}

.line {
    border-bottom: 2px solid var(--mainText);
}

</style>