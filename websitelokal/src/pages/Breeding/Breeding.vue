<template>
    <div>
        <h1>Unsere Zuchtstätte</h1>
        <div class="subcontainer">
            <p>
                Mit unserer dritten Eurasierhündin Khaleesi entschieden wir uns 2021 für die Eurasierzucht. 
                Nach reichlicher familieninterner Debatte stand dann auch die wichtigste Entscheidung in diesem Rahmen fest, der Name unserer Zuchtstätte:
            </p>
            <h3 class="bold" style="text-align: center; margin-top: 16px;">Eurasier vom Gonsbachtal</h3>
        </div>

        <div class="subcontainer">
            <h2>Namensursprung</h2>
            <p>
                Nur wenige Fußminuten von unserem Zuhause entfernt liegt das Gonsbachtal. In ihm windet sich der Gonsbach, als Teil eines Bachsystems der Stadt Mainz in Rheinland-Pfalz 
                und mündet in den Rhein. In seiner Länge von 9,8 km durchfließt er die Stadtteile Layenhof, Finthen, Gonsenheim und Mombach.
            </p>
            <p>
                In seiner Herkunft aus dem überwiegend kalkhaltigen Grundgestein Rheinhessens entsprechend, ein Karbonat­bach. Er gehört zu einem seltenen und empfindlichen Gewässertyp 
                der Trockengebiete mit geringer, aber relativ gleichmäßiger Wasserführung.
            </p>
            <p>
                Im Frühjahr 2013 wurde der Gonsbachs im Stadtteil Mainz-Gonsenheim auf einer Länge von 1,2 km renaturiert. Mit großzügigen Wiesen und 
                Feuchtbiotopen lädt das Gonsbachtal zu gemütlichen Spaziergängen ein.
            </p>
        </div>
            
        <div class="subcontainer">
            <h2>Unser Logo</h2>
            <p>
                Zeigt die Krümmung des Rheins bei Mainz, rechts die Mündung des Main, links Gonsbach und Gonsbachtal und deren Verlauf. 
                Unsere erste Hündin Amy wacht über die Zuchtstätte.
            </p>
        </div>

        <div class="subcontainer" style="margin-bottom: 0px;">
            <h2>Partnervereine</h2>
            <a href="http://www.eurasierfreunde-deutschland.de/index.htm"><img id="EFD" src="../../assets/Logo-EFD.jpg" alt="Logo EFD"></a>
            <a href="https://www.der-eurasier.de/"><img id="EZV" src="../../assets/Logo-EZV.jpg" alt="Logo EZV"></a>
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
    margin-bottom: 32px;
}

.subcontainer {
    margin-bottom: 32px;
}

img {
    object-fit: contain;
}

#EFD {
    width: 18em;
    height: 10em;
}

#EZV {
    width: 10em;
    height: 10em;
}
</style>