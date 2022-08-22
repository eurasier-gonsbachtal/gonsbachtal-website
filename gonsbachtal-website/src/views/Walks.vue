<template>
    <div>
        <ImageTextWide :info="walks"/>
        
        <div class="information">
            <h2>Nächster Spaziergang</h2>
            <div class="info">
                <h3 class="date">Datum:</h3><h4>28.08.2022</h4>
                <h3 class="place">Treffpunkt:</h3>
                <h4><a href="https://www.google.de/maps/place/Forsthaus+J%C3%A4gerhaus/@49.983925,7.8265928,359m/data=!3m1!1e3!4m13!1m7!3m6!1s0x47bde439af8a412d:0x3d2a49f91f747200!2sForsthaus+J%C3%A4gerhaus,+55413+Weiler+bei+Bingen!3b1!8m2!3d49.9828664!4d7.8256035!3m4!1s0x47bde575f588bf67:0x2301eca7baff05ad!8m2!3d49.9839789!4d7.8277463">
                    Forsthaus Jägerhaus</a>, 55413 Weiler bei Bingen
                </h4>
            </div>
            <p></p>
        </div>

        <div class="walks">
            <h2>Bisherige Ziele</h2>
            <div class="walk-list">
                <p class="light-bold">17.07.2022</p><p>Mainz, Schloss Waldthausen</p>
                <p class="light-bold">14.05.2022</p><p>Ingelheim, Bismarkturm</p>
                <p class="light-bold">10.04.2022</p><p>Hocheim, Hocheimer Mainwiese</p>
                <p class="light-bold">21.11.2021</p><p>Rüdesheim, Jagdschloss Niederwald</p>
                <p class="light-bold">10.10.2021</p><p>Hocheim, Hocheimer Mainwiese</p>
                <p class="light-bold">08.08.2021</p><p>Mainz-Mombach, Mainzer Sand</p>
                <p class="light-bold">18.10.2020</p><p>Mainz-Finthen (unter Corona-Regeln)</p>
                <p class="light-bold">22.03.2020</p><p>Mainz-Mombach, Mainzer Sand (ausgefallen wegen Corona)</p>
                <p class="light-bold">22.12.2019</p><p>Rüdesheim, Niederwalddenkmal</p>
                <p class="light-bold">22.09.2019</p><p>Ginsheim-Gustavsburg, Nonnenaue</p>
                <p class="light-bold">18.08.2019</p><p>Wiesbaden, Chaussehaus</p>
                <p class="light-bold">30.06.2019</p><p>Heidenrod, Wispersee</p>
                <p class="light-bold">19.05.2019</p><p>Hocheim. Hocheimer Mainwiese</p>
                <p class="light-bold">14.04.2019</p><p>Wiesenheim am Berg</p>
                <p class="light-bold">31.03.2019</p><p>Ginsheim, Bürgerhaus, Ginsheimer Altrhein</p>
                <p class="light-bold">24.02.2019</p><p>Ingelheim, Rheinufer</p>
                <p class="light-bold">29.12.2018</p><p>Mainz-Mombach, Mainzer Sand</p>
                <p class="light-bold">28.10.2018</p><p>Rüdesheim, Jagdschloss, Burgruine ehrenfels</p>
                <p class="light-bold">09.09.2018</p><p>Ginsheim, Hofgut Langenau</p>
                <p class="light-bold">11.08.2018</p><p>Offenbach, Käsmuhle</p>
            </div>
        </div>
    </div>
</template>

<script>
import ImageTextWide from '../components/ImageTextWide.vue';


export default {
  name: 'App',
  data() {
    return {
        walks: {
            title: "Spaziergänge",
            description: `<p>Seit August 2014 plant Ute gemeinsam mit unserer Freundin Mirijam Spaziergänge im Umkreis von Rüdesheim am Rhein, Mainz, Hochheim 
            und manchmal auch ein bisschen weiter drumherum. Diese finden ca. alle zwei Monate statt.</p>
            <p>Die Spaziergänge sind meist einem leichten bis mittleren Wandergrad einzustufen. Bei Bedarf auch mal einem Kinderwagen, Rollator oder Rollstuhl angepasst.</p>
            <p>Die Gruppe auf Facebook nennt sich 
            <a href="https://www.facebook.com/groups/264113601018341">„Eurasierspaziergang zwischen Rheingau und Frankfurt“</a>.</p>
            <p>Alte, junge Menschen und Hunde (jeder Rasse) heißen wir gerne Willkommen.</p>`,
            img: require('../assets/img/Khali_Platz.jpg'),
            img_description: 'Beschreibung',
            contact_link: false
        },
    }
  },
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
    grid-template-columns: auto auto;
    justify-content: space-between;
    max-width: fit-content;
    gap: 8px 32px;
}

.walk-list p {
    margin-bottom: 0px;
    text-align: start;
}
</style>