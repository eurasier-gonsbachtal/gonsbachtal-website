<template>
    <div class="information">
        <h2>Title</h2>
        <p class="light">Date</p>
        <p>Information</p>
    </div>
</template>

<style scoped>
:root {
  --backgroundColor: #dcdece;
  --mainText: #333D29;
  --mainTextLight: #70875A;
  --linkText: #936639;
  --focusedText: #582F0E;
  --higlightedText: #04A0A2;
}

p.light {
    margin-bottom: 16px;
    color: var(--mainTextLight);
}

h2 {
    margin-bottom: 0px;
}

.information {
    margin-bottom: 64px;
}

</style>