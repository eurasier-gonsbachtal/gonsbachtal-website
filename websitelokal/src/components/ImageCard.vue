<template>
    <div class="container">
        <div class="card">
            <h4>1.Woche</h4>
            <img src="../assets/img/Khali_Side.jpg" alt="Bild Khaleesi von den Wolfswiesen">
        </div>
        <div class="card">
            <h4>Abgabe</h4>
            <img src="../assets/img/Khali_Side.jpg" alt="Bild Khaleesi von den Wolfswiesen">
        </div>
        <div class="card">
            <h4>1/2 Jahr</h4>
            <img src="../assets/img/Khali_Side.jpg" alt="Bild Khaleesi von den Wolfswiesen">
        </div>
        <div class="card">
            <h4>1 Jahr</h4>
            <img src="../assets/img/Khali_Side.jpg" alt="Bild Khaleesi von den Wolfswiesen">
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

.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: space-between;
    gap: 8px 8px;
}

.card {
}

img {
    width: 100%;
    max-height: 50vh;
    border-radius: 0px 0px 8px 8px;
    object-fit: contain;
}

h4 {
    padding: 8px;
    background-color: var(--backgroundColor);
    border-radius: 8px 8px 0px 0px;
    margin: 0px;
}

</style>