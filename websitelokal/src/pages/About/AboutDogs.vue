<template>
    <div>
        <h1>Unsere Hunde</h1>
        <ImageLeftTextHigh/>
        <ImageRightTextHigh/>
        <ImageLeftTextHigh/>
        <ImageRightTextHigh/>
    </div>
</template>

<script>
import ImageRightTextHigh from '../../components/ImageRightTextHigh.vue';
import ImageLeftTextHigh from '../../components/ImageLeftTextHigh.vue';

export default {
  name: 'App',
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