<template>
    <div>
        <ImageTextWide :info="welcome"/>
        <h1>Aktuelle Informationen</h1>

        <div style="margin-bottom: 64px;">
            <InfoContainer v-for="info in infos" :info="info" v-bind:key="info.title"/> 
        </div>
        
        <h1 class="bilder">Bildergalerie</h1>
        <ImageSlider :images="images"/>
    </div>
</template>

<script>
import InfoContainer from '../components/InfoContainer.vue'
import ImageTextWide from '../components/ImageTextWide.vue'
import ImageSlider from '../components/ImageSlider.vue'

export default {
  name: 'Homepage',
  data() {
    return {
        welcome: {
            title: "Herzlich Willkommen!",
            description: `<p>Wir heißen Sie herzlich Willkommen auf der Homepage unserer Zuchtstätte Eurasier vom Gonsbachtal.</p>
            <p>Schauen Sie sich um, entdecken und verlieben Sie sich in die wunderbare Hunderasse Eurasier - wie auch wir es getan 
            haben und lernen Sie uns und unsere Zuchtstätte kennen.</p>
            <p>Aktuelle Informationen und Fotos unserer Hunde und Zucht finden Sie auch immer auf unserer <a href="https://www.facebook.com/EurasierVomGonsbachtal/">
            Facebook Seite</a>.</p>`,
            img: require('../assets/img/Khali_Platz.jpg'),
            img_description: 'Khaleesi von den Wolfswiesen - Unsere Zuchthündin',
            contact_link: true
        },
        infos: [
            {
                title: "Wurfplanung",
                date: "Stand: 21.08.2022",
                description: `Wir bedanken uns für Ihr Interesse an unserer Zuchtstätte. Aktuell ist kein Wurf geplant. Sollten Sie sich für einen Euraiserwelpen interessieren, 
                melden Sie sich doch bitte bei der <a href="https://www.der-eurasier.de/wurfmeldungen/">Welpenvermittlung</a> unseres Zuchtvereins.`
            },
        ],
        images: [
            {
                title: "Fellpflege muss sein - Arya, Finja und Amon vom Gonsbachtal",
                img: require("../assets/img/Homepage/Welpen2.jpg")
            },
            {
                title: "Widersehensfreude: Erstmal Spielen - Arya und Akito vom Gonsbachtal",
                img: require("../assets/img/Homepage/Akito_Arya.jpg")
            },
            {
                title: "Arya vom Gonsbachtal",
                img: require("../assets/img/Homepage/Arya.jpg")
            },
            {
                title: "Auch im Urlaub mit dabei - Khaleesi von den Wolfswiesen",
                img: require("../assets/img/Homepage/Khali1.jpg")
            },
            {
                title: "Camora von der Mainschleife",
                img: require("../assets/img/Homepage/Mora1.jpg")
            },
            {
                title: "Schaffst du das auch? - Akito vom Gonsbachtal",
                img: require("../assets/img/Homepage/Akito.jpg")
            },
            {
                title: "Khaleesi von den Wolfswiesen - als Welpe",
                img: require("../assets/img/Homepage/Khali2.jpg")
            },
            {
                title: "Da waren wir noch klein und süß - Akira und Akito vom Gonsbachtal",
                img: require("../assets/img/Homepage/Welpen1.jpg")
            },
            {
                title: "Urlaubfoto - Camora von der Mainschleife",
                img: require("../assets/img/Homepage/Mora2.jpg")
            },

        ]
    }
  },
  components: {
    InfoContainer,
    ImageTextWide,
    ImageSlider,
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

h1 {
    color: var(--higlightedText);
    margin-bottom: 8px;
}

h1.bilder {
    color: var(--mainText);
}

</style>