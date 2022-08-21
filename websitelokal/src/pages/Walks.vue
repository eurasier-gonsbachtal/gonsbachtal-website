<template>
    <div>
        <ImageTextWide/>
        
        <div class="information">
            <h2>Nächster Spaziergang</h2>
            <div class="info">
                <h3 class="date">Datum:</h3><h4>01.01.2022</h4>
                <h3 class="place">Treffpunkt:</h3><h4>Ortsname, Parkplatz</h4>
            </div>
            <p>Information</p>
        </div>

        <div class="walks">
            <h2>Bisherige Ziele</h2>
            <div class="walk-list">
                <p class="light-bold">Date</p><p>Ort</p><p>20 Hunde</p>
                <p class="light-bold">Date</p><p>Ort</p><p>20 Hunde</p>
                <p class="light-bold">Date</p><p>Ort</p><p>20 Hunde</p>
            </div>
        </div>
    </div>
</template>

<script>
import ImageTextWide from '../components/ImageTextWide.vue';


export default {
  name: 'App',
  components: {
    ImageTextWide
}
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

.swiper {
    margin-bottom: 0px;
}

p.light {
    margin-bottom: 16px;
    color: var(--mainTextLight);
}

h1 {
    margin-bottom: 32px;
}

.information h2 {
    margin-bottom: 8px;
    color: var(--higlightedText);
}

h3 {
    color: var(--mainTextLight);
}

.information {
    margin-bottom: 64px;
}

.info {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    justify-content: space-between;
    max-width: fit-content;
    gap: 4px 32px;
    margin-bottom: 16px;
}

.walks, .description {
    margin-bottom: 64px;
}

.walk-list {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    max-width: fit-content;
    gap: 0px 32px;
}

.walk-list p {
    margin-bottom: 0px;
}
</style>