<template>
<div>
    <div class="imageText">
        <img src="../assets/img/Khali_Face.jpg" alt="">

        <div class="text">
            <h1>Title</h1>
            <p class="light">Date</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
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
    object-fit: cover;
}

.imageText {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0px 32px;
    margin-bottom: 64px;
}

h1 {
    margin-bottom: 0px;
}

p.light {
    margin-bottom: 16px;
    color: var(--mainTextLight);
}
</style>