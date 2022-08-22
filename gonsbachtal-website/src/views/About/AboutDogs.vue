<template>
    <div>
        <h1>Unsere Hunde</h1>
        <ImageLeftTextHigh :content="amy"/>
        <ImageRightTextHigh :content="mora"/>
        <ImageLeftTextHigh :content="khali"/>
        <ImageRightTextHigh :content="arya"/>
    </div>
</template>

<script>
import ImageRightTextHigh from '../../components/ImageRightTextHigh.vue';
import ImageLeftTextHigh from '../../components/ImageLeftTextHigh.vue';

export default {
  name: 'App',
  data() {
    return {
      amy: {
        title: "Amy - Aysha vom großen Sand",
        birthdate: "25.05.1997",
        deathdate: "13.08.2014",
        description: `<p>Unsere Erste und für immer in unseren Herzen.</p><p>Im Laufe Ihres Lebens brachte Sie unseren vier Kindern das Laufen bei und war ein fester Bestandteil 
        unserer Familie. Im stolzen Alter von 17 Jahren verabschiedete sie sich von uns. Wir sind aber sicher, dass unsere Amy immer noch auf uns und nun auch unsere 
        Zuchtstätte aufpasst.</p> <p>Danach wollten wir eigentlich eine kurze Hundepause einlegen.</p>`,
        img: require("../../assets/img/Bohland_Amy.jpg")
      },
      mora: {
        title: "Mora - Camora von der Mainschleife",
        birthdate: `29.12.2009`,
        description: `<p style="text-align: left;">"Wir machen eine kurze Hundepause" - Unser Notfellchen.</p><p>Über Eurasier in Not ereilte uns ein Hilfeersuchen über eine vierjährige Eurasierdame 
        und so hielt Mora tatsächlich „nach einer kurzen Pause“ (6 Wochen später) bei uns Einzug. Mora hat unser Leben wirklich bereichert.  Wir haben durch sie und mit ihr 
        so viel Neues entdeckt und gelernt - und tun es immer noch. Ohne sie wären wir niemals so aktiv in den Hundevereinen geworden und hätten die Kontakte knüpfen können, 
        die uns schließlich zu Khaleesi und der Eröffnung unserer eigenen Zucht führte.</p>`,
        img: require("../../assets/img/Mora_Face.jpg")
      },
      khali: {
        title: "Khali - Khaleesi von den Wolfswiesen",
        birthdate: `23.04.2018`,
        description: `<p>Unser glücklicher Zufall.</p><p>Eigentlich nur zu Besuch bei den Wolfswiesen, ein schönes verlängertes Wochenende zu zweit bei Freunden, 
        alle Welpen schon vergeben - sodass keinerlei Gefahr besteht, auch wenn wir langsam mit dem Gedanken spielten uns einen weiteren Eurasier zuzulegen. 
        Nun, es kam so wie es kommen sollte und wenige Wochen später zog Khaleesi bei uns ein, mit der wir unsere Zucht begonnen haben.</p>`,
        img: require("../../assets/img/Khali_Face.jpg")
      },
      arya: {
        title: "Pinsel - Arya vom Gonsbachtal",
        birthdate: `01.01.2022`,
        description: `<p>Die Erstgeborene.</p><p>Vom ersten Wurf muss natürlich ein Welpe behalten werden - alleine um den Trennungsschmerz etwas zu erleichtern.
        Und wer bietet sich da besser an, als die Erstgeborene des Wurfes, heimlich von ihrer Mama in der Lieblingsecke des Hauses zur Welt gebracht. Wie
        hätten wir sie auch nicht behalten können, den kleinen Frechdachs mit der weißen Schwanzspitze, die aussieht, als hätte man sie in Farbe getunkt.</p>`,
        img: require("../../assets/img/Arya_Face.jpg")
      }
    }
  },
  components: {
    ImageRightTextHigh,
    ImageLeftTextHigh
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

</style>