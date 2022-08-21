<template>
     <div class="footer">
        <a href="https://www.facebook.com/EurasierVomGonsbachtal/"><i class="fa-brands fa-facebook"></i></a>
         
         <div>
            <a href="">Impressum</a>
            <a href="">Datenschutzerklärung</a>
         </div>
         
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

.footer {
    margin: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}

i {
    font-size: 1.4em;
}

a {
    font-size: 1em;
    color: var(--mainText);
    text-decoration: none;
    padding: 0px 16px 0px 16px
}

i:hover, a:hover {
    color: var(--focusedText)
}
</style>