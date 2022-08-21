<template>
    <div>
        <h1>Impressum</h1>
        <h3>Angaben gemäß § 5 TMG</h3>
        <div class="address">
            <p>Klaus Bohland</p>
            <p>Am Fort Gonsenheim 103</p>
            <p>55122 Mainz</p>
        </div>

        <h3>Kontakt:</h3>
        <div class="contact">
            <p class="bold">E-Mail:</p> <a href="mailto:eurasier@bohland.org">eurasier@bohland.org</a>
            <p class="bold">Tel.:</p> <a href="tel: 06131384047">06131 384047</a>
        </div>

        <h1>Allgemeine Hinweise</h1>
        <div class="container">
            <p class="bold">Aktualisierung und Haftung:</p>
            <p>
                Wir sind bemüht, für die Richtigkeit und Aktualität aller auf unserer Website enthaltenen Informationen und Daten zu sorgen. 
                Eine Haftung oder Garantie für die Aktualität, Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen und Daten ist jedoch ausgeschlossen. 
                In keinem Fall wird für Schäden, die sich aus der Verwendung der abgerufenen Informationen ergeben, eine Haftung übernommen.
                Wir behalten uns vor, ohne Ankündigung Änderungen oder Ergänzungen der bereitgestellten Informationen oder Daten vorzunehmen.
            </p>
        </div>
        <div class="container">
            <p class="bold">Links:</p>
            <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte 
                auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung 
                nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
        </div>
        <div class="container">
            <p class="bold">Urheberrecht:</p>
            <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber 
                erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte 
                umgehend entfernen.
            </p>
        </div>
        <div class="container">
            <p class="bold">Datenschutz-Hinweis:</p>
            <p>
                Die Nutzung unserer Webseite ist in der Regel ohne Angaben personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, 
                erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an dritte weitergegeben.
            </p>
            <p>
                Wir weisen daraufhin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz 
                der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            <p>
                Die Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung 
                und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle 
                der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
        </div>
        <p style="margin-bottom: 0px;">Quelle: <a href="https://www.e-recht24.de/muster-disclaimer.html">e-recht24 Muster-Disclaimer</a></p>
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

.address p {
    margin: 0px;
}

.address {
    margin-bottom: 32px;
}

.contact {
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto;
    max-width: fit-content;
    gap: 0px 16px;
    margin-bottom: 64px;
}

.container {
    margin-bottom: 32px;
}

</style>