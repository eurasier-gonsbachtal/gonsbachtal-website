<template>
    <div>
        <ImageTextWide/>
        <h1>Aktuelle Informationen</h1>

        <!--Loop over List of Information-->
        <InfoContainer/> 
        <!--End Loop-->
        
        <ImageSlider/>
    </div>
</template>

<script>
import InfoContainer from '../components/InfoContainer.vue'
import ImageTextWide from '../components/ImageTextWide.vue'
import ImageSlider from '../components/ImageSlider.vue'

export default {
  name: 'App',
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

</style>