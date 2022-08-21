<template>
    <div>
        <h1>A-Wurf</h1>
        <h3>01.01.2022</h3>
        <div class="image">
             <img src="../../assets/img/A-Wurf-Gruppe.jpg" alt="A-Wurf">
        </div>

        <DogParents :mom="mom" :dad="dad"/>

        <p style="margin-bottom: 64px;">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div class="puppies">
            <div class="puppy">
                <h2>Arya</h2>
                <h4>geb. 01.01.2022 09:50 Uhr, 370g, Kennfarbe gelb, Hündin, geb. Farbe schwarz/bunt</h4>
                <ImageCard :images="arya"/>
            </div>
            <div class="puppy">
                <h2>Aragorn</h2>
                <h4>geb. 01.01.2022 11:23 Uhr, 413g, Kennfarbe rot, Rüde, geb. Farbe schwarz</h4>
                <ImageCard :images="aragorn"/>
            </div>
            <div class="puppy">
                <h2>A-Finja</h2>
                <h4>geb. 01.01.2022 11:53 Uhr, 341g, Kennfarbe weiß, Hündin, geb. Farbe wolfsfarben</h4>
                <ImageCard :images="finja"/>
            </div>
            <div class="puppy">
                <h2>Akira</h2>
                <h4>geb. 01.01.2022 12:33 Uhr, 401g, Kennfarbe grün, Rüde, geb. Farbe schwarz</h4>
                <ImageCard :images="akira"/>
            </div>
            <div class="puppy">
                <h2>Archie</h2>
                <h4>geb. 01.01.2022 13:09 Uhr, 371g, Kennfarbe blau, Rüde, geb. Farbe schwarz</h4>
                <ImageCard :images="archie"/>
            </div>
            <div class="puppy">
                <h2>Akito</h2>
                <h4>geb. 01.01.2022 13:54 Uhr, 416g, Kennfarbe ohne, Rüde, geb. Farbe hell</h4>
                <ImageCard :images="akito"/>
            </div>
            <div class="puppy">
                <h2>Amon</h2>
                <div class="title">
                    <h4>
                        geb. 01.01.2022, 16:48 Uhr -&nbsp
                        <i class="fa-solid fa-cross"></i>
                        04.05.2022 , 408g, Kennfarbe lila, Rüde, geb. Farbe wolfsfarben
                    </h4>
                </div>
                
                <p style="margin-bottom: 16px;">
                    Mit erst vier Monaten wanderte Amon über die Regenbogenbrücke. Aufgrund der Heftigkeit und Schnelligkeit seines Kampfes ist eine Vergiftung nicht 
                    auszuschließen. Der Grund lässt sich nicht genau festlegen, aber feststeht, dass er viel zu früh von uns gehen musste und ein Stück der 
                    Herzen seiner Besitzer und unserer mit sich genommen hat.
                </p>
                
                <ImageCard :images="amon"/>
            </div>
        </div>

       
    </div>
</template>

<script>
import ImageCard from '../../components/ImageCard.vue';
import DogParents from '../../components/DogParents.vue';

export default {
  name: 'App',
  data() {
    return {
        arya: {
            woche1: require("../../assets/img/A-Wurf/Woche1/Pinsel.jpg"),
            abgabe: require("../../assets/img/A-Wurf/Abgabe/Arya.jpg"),
            halbesJahr: require("../../assets/img/comingSoon.jpg"),
            jahr: require("../../assets/img/comingSoon.jpg"),
        },
        aragorn: {
            woche1: require("../../assets/img/A-Wurf/Woche1/Mister Rot.jpg"),
            abgabe: require("../../assets/img/A-Wurf/Abgabe/Aragorn.jpg"),
            halbesJahr: require("../../assets/img/comingSoon.jpg"),
            jahr: require("../../assets/img/comingSoon.jpg"),
        },
        finja: {
            woche1: require("../../assets/img/A-Wurf/Woche1/Miss Weiß.jpg"),
            abgabe: require("../../assets/img/A-Wurf/Abgabe/Finja.jpg"),
            halbesJahr: require("../../assets/img/comingSoon.jpg"),
            jahr: require("../../assets/img/comingSoon.jpg"),
        },
        akira: {
            woche1: require("../../assets/img/A-Wurf/Woche1/Mister Grün.jpg"),
            abgabe: require("../../assets/img/A-Wurf/Abgabe/Akira.jpg"),
            halbesJahr: require("../../assets/img/comingSoon.jpg"),
            jahr: require("../../assets/img/comingSoon.jpg"),
        },
        archie: {
            woche1: require("../../assets/img/A-Wurf/Woche1/Mister Blau.jpg"),
            abgabe: require("../../assets/img/A-Wurf/Abgabe/Archie.jpg"),
            halbesJahr: require("../../assets/img/comingSoon.jpg"),
            jahr: require("../../assets/img/comingSoon.jpg"),
        },
        akito: {
            woche1: require("../../assets/img/A-Wurf/Woche1/Der Helle.jpg"),
            abgabe: require("../../assets/img/A-Wurf/Abgabe/Akito.jpg"),
            halbesJahr: require("../../assets/img/comingSoon.jpg"),
            jahr: require("../../assets/img/comingSoon.jpg"),
        },
        amon: {
            woche1: require("../../assets/img/A-Wurf/Woche1/Mister Lila.jpg"),
            abgabe: require("../../assets/img/A-Wurf/Abgabe/Amon.jpg"),
        },
        mom: {
            name: "Khaleesi von den Wolfswiesen",
            bday: "geb. 23.04.2018",
            img_face: require("../../assets/img/Khali_Face_small.jpg"),
            img_side: require("../../assets/img/Khali_Side.jpg")
        },
        dad: {
            name: "B-Akela vom Innestetal",
            bday: "geb. 27.10.2016",
            img_face: require("../../assets/img/Khali_Face_small.jpg"),
            img_side: require("../../assets/img/Khali_Side.jpg")
        }
    }
  },
  components: {
    ImageCard,
    DogParents
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

h1 {
    margin-bottom: 0px;
}

h3 {
    color: var(--mainTextLight);
}

h4 {
    color: var(--mainTextLight);
    margin-bottom: 16px;
}

h2 {
    margin-bottom: 0px;
}

.image {
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    max-width: 750px;
    width: 100%;
    height: auto;
    margin-bottom: 32px;
    border-radius: 8px;
}

.puppies {
    display: grid;
    gap: 64px 0px;
}

h4 {
    display: flex;
}

i {
    color: var(--mainTextLight);
    font-size: 0.8em;
}
</style>