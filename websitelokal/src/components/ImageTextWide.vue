<template>
    <div class="imageText">
        <div class="image">
            <img src="../assets/img/Khali_Side.jpg" alt="Bild Khaleesi von den Wolfswiesen">
            <p class="light">Bildbeschreibung</p>
        </div>
        <div class="text">
            <h1>Title</h1>
            <p>Information</p>
        </div>
    </div>
</template>

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
    gap: 0px 32px;
    margin-bottom: 64px;
}
</style>