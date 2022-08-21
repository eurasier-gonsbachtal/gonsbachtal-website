<template>
  <swiper
    :slidesPerView="4"
    :spaceBetween="4"
    :slidesPerGroup="4"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="../assets/img/Khali_Side.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/Khali_Platz.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/Khali_Face.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/Bohland_Amy.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/Eurasier-Farben.jpeg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/Mora_Face.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/Mora-Side.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/Khali_Side.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/Eurasier-Farben.jpeg" alt="">
    </swiper-slide>
  </swiper>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';
  import "swiper/modules/navigation/navigation";
  import "swiper/modules/pagination/pagination";

  import { Pagination, Navigation } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation]
      }
    },
  };
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
  width: 97%;
  height: 100%;
  padding: 8px 16px 8px 16px;
  background-color: var(--backgroundColor);
  border-radius: 8px;
  margin-bottom: 64px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 30vh;
  object-fit: contain;
  background-color: rgba(0, 0, 0, .1);
  border-radius: 8px;
}

</style>
