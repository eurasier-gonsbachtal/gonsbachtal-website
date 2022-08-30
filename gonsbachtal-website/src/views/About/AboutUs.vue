<template>
    <div>
        <h1>Über uns</h1>
        <h3>Ute & Klaus Bohland</h3>
        <h4>Arzthelferin trifft Feuerwehrmann</h4>
        <p>
            1997 beschlossen wir, unsere Zweisamkeit mit einem Hund zu bereichern und informierten uns 
            zunächst im Freundeskreis und verschiedenen Lektüren über bestehende Hunderassen.
        </p>
        <p>
            Im Juli 1997 saßen wir gemütlich in einem Café in der Mainzer Fußgängerzone als zwei Menschen, 
            gezogen von vielen kleinen durcheinander wirbelnden Fellnasen an uns vorüberzogen. In einem kurzen Gespräch erfuhren wir, 
            dass es sich hierbei um Eurasierwelpen handelte, die ihren ersten großen 
            Spaziergang in der Stadt erlebten. Einen Tag später lernten wir die Mutter kennen und bald darauf zog Amy im Alter von neun Wochen bei uns ein.
        </p>
        <p>
            Im Laufe Ihres Lebens brachte Sie unseren vier Kindern das Laufen bei und war ein fester Bestandteil unserer Familie. Im Alter von 17 Jahren und
             3 Monaten mussten wir Amy am 13.08.2014 über die Regenbogenbrücke ziehen lassen.
        </p>
        <p>
            Danach wollten wir eigentlich eine kurze Hundepause einlegen.
        </p>
        <p>
            Über Eurasier in Not ereilte uns ein Hilfeersuchen für eine vierjährige Eurasierdame und so hielt Mora tatsächlich „nach einer kurzen Pause“ 
            (6 Wochen später) bei uns Einzug.
        </p>
        <p>
            2018 kam Khaleesi als Welpe zu uns, mit der wir 2021 unsere Zuchtstätte in der EZV gründeten.
        </p>
        <p class="light-bold" style="margin-bottom: 32px; margin-top: 16px;">
            Mitgliedschaften in EFD, EZV, HSVRM, SV-OG Mainz-Finthen.
        </p>

        <h2>Ich, Klaus, der Züchter</h2>
        <p>
            Bereits mit Amy scherzte ich hin und wieder über Zucht und Nachwuchs. Mit Khaleesi wurden 2021, Fantastereien und Sprüche sowie der Liebe 
            zum Eurasier in die Tat umgesetzt.
        </p>
    </div>
    <p>
        Nach dem ganzen verwaltungstechnischen Kram mit Verein und Behörden, sowie der Planung und Vorbereitung eines Zucht- und Welpen geeigneten häuslichen Umfeldes, 
        und natürlich dem Absolvieren erforderlicher Zuchtseminare und Lehrgänge durfte ich mich dann „Züchter“ nennen.
    </p>
    <p style="margin-bottom: 32px;">
        Nachdem dann auch die Prüfung für unsere Khaleesi zur Zuchttauglichkeit vorlag, begann mit Unterstützung befreundeter und erfahrenerer Züchter sowie 
        meiner Familie das „Tindern“ geeigneter Zuchtrüden. Nach langem Warten kam dann pünktlich zu Beginn des neuen Jahres 2022 der allererste Wurf unserer Zuchtstätte
        zur Welt. 
    </p>

    <h2 >Wir, die Familie</h2>
    <p>
        Meine Frau Ute, unser Sohn Joshua sowie unsere Töchter Jessica, Samantha und Constanze.
    </p>

    <p>
        „Gemeinsam an einem Strang, in eine Richtung“, manchmal aber auch mit unterschiedlichen pubertistisch angehauchten Ansichten kam der erste Wurf in unsere 
        Familie und wurde, wie es sich für Eurasierzüchter gehört, in der Wohnung, im Haus und im Garten gemeinsam in der Familie aufgezogen. Wir alle freuen uns
        schon sehr auf die nächsten Würfe und das Aufziehen weiterer Generationen der Eurasier vom Gonsbachtal.
    </p>
</template>

<script>

export default {
  name: 'App',
  components: {
},
props: ["onUeberUns"],
emits: ["update-ueber-uns-nav-on", "update-ueber-uns-nav-off"],
mounted() {
    this.$emit("update-ueber-uns-nav-on")
},
unmounted() {
    this.$emit("update-ueber-uns-nav-off")
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

h3, h4 {
    color: var(--mainTextLight);
    margin-bottom: 0px;
}

h4 {
    margin-bottom: 16px;
}
</style>