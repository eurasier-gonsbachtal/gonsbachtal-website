<template>
    <div>
        <h1>Der Eurasier</h1>
        <p style="margin-bottom: 32px;">
            Der Eurasier ist die jüngste deutsche Hunderasse und wurde von Beginn an zielgerichtet als Familienhund gezüchtet. 
            Der Eurasier teilt den Alltag mit seinen Menschen. Für Zwingerhaltung oder langes Alleinsein ist er nicht geschaffen.
        </p>

        <div class="subcontainer">
            <h2>Rassegeschichte</h2>
            <p>
                Dieser prächtige Hund mit seiner großen Ausstrahlung entstand in den Jahren 1960 - 1973 aus einer Kombinationszucht der drei Rassen Chow-Chow, 
                Wolfsspitz und Samojede. Der Name EURASIER verweist auf die Herkunft der Ausgangsrassen - Europa und Asien. 
                Durch strenge Auslese und konsequente Zuchtplanung hat sich der Eurasier zu einer eigenständigen Hunderasse entwickelt, 
                die an unsere heutige Umwelt bestens angepasst ist.
            </p>
        </div>

        <div class="subcontainer">
            <h2>Erscheinung</h2>
            <p>
                Der Eurasier mit seinen attraktiven Farben schmeichelt unserem ästhetischen Empfinden. Da diese neue Rasse nie in abgegrenzten Farbschlägen gezüchtet 
                wurde, hat sich im Laufe der Jahre eine recht vielfarbene Eurasierpopulation entwickelt. Nur die Farben weiß, weiß-gescheckt und leberfarben sind 
                nach FCI-Standard 291 nicht erlaubt und werden von der Zucht ausgeschlossen. Am ganzen Körper hat der Eurasier dichte Unterwolle und mittellanges 
                lose anliegendes Grannenhaar. Sein dichtes Haarkleid macht ihn kälteunempfindlich, das Fell ist schmutzabweisend und damit pflegeleicht, seine 
                Gesundheit ist robust. Er ist ein harmonisch aufgebauter, mittelgroßer spitzartiger Hund von kräftiger Konstitution.
            </p>
            <p>
                Genaueres zu den verschieden Farben des Eurasiers können Sie bei 
                <a href="http://www.eurasierzuechter.de/eurasier/farben.html">Eurasier-große Farbvielfalt</a> entdecken.
            </p>
        </div>

        <div class="subcontainer">
            <h2>Größen</h2>
            <div class="size">
                <p>Rüden</p><p>52 - 60 cm</p><p>Gewicht 23 - 32 kg</p>
                <p>Hündinnen</p><p>48 - 56 cm</p><p>Gewicht 18 - 26 kg</p>
            </div>
        </div>

        <div class="subcontainer">
            <h2>Verhalten und Charakter</h2>
            <p>
                Der Eurasier ist ein selbstbewußter Individualist, ruhig und ausgeglichen. Er ist ein unbestechlicher Wächter. Der Eurasier liebt seine ganze Familie 
                und ist auf diese stark fixiert. Mit Kindern geht er liebenswürdig um und ist ihnen ein fröhlicher Spielkamerad, solange ihn die 
                Kinder als Hundepersönlichkeit respektieren und nicht als Spielzeug missbrauchen. Fremden gegenüber verhält er sich neutral bis zurückhaltend. 
                Der Eurasier ist auf Spaziergängen ein angenehmer Begleiter, denn er hat keinen ausgeprägten Jagdtrieb.
            </p>
        </div>

        <div class="subcontainer">
            <h2>Haltung</h2>
            <p>
                Der Eurasier will das tägliche Leben mit seinem Menschen teilen, er lebt deshalb dort, wo seine Familie sich aufhält, in der Wohnung oder im Haus. 
                Wer den ganzen Tag außer Haus seinem Beruf nachgeht und den Hund allein lässt, sollte sich keinen Eurasier halten, denn er wird den Bedürfnissen 
                dieser Rasse nach enger Menschenanbindung nicht gerecht. Er ist ein sehr intelligenter Hund und trickst seinen Menschen ganz charmant aus, um seinen 
                eigenen Willen durchzusetzen. Doch mit Leckerchen oder Lob ist er sehr leicht zu motivieren und zu überzeugen, dass zu tun, was sein Mensch von ihm 
                verlangt. Mit Drill und Strenge und stupiden Wiederholungsübungen erreicht man bei diesem Hund gar nichts. Viele unserer Eurasier erreichen ein Alter 
                von 12 – 15 Jahren.
            </p>
        </div>

        <p style="margin-bottom: 64px;">
            Quelle: <a href="http://www.eurasierfreunde-deutschland.de/rassemerkmale/rassemerkmale.htm">EFD</a>
        </p>

        <ImageSlider/>
    </div>
</template>

<script>
import ImageSlider from '../components/ImageSlider.vue'

export default {
  name: 'App',
  components: {
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

.subcontainer {
    margin-bottom: 32px;
}

.swiper {
    margin: 0px;
}

.size {
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    max-width: fit-content;
    gap: 0px 32px;
}

</style>