<template>
    <div class="main">
        <div class="contact-main">
            <h1>Kontakt</h1>
            <div class="contact">
                <p class="bold">Ansprechpartner:</p><p>Klaus Bohland</p>
                <p class="bold">E-Mail:</p> <a href="mailto:eurasier@bohland.org">eurasier@bohland.org</a>
                <p class="bold">Tel.:</p><a href="tel: 06131384047">06131 384047</a>
            </div>
            <a href="https://www.facebook.com/EurasierVomGonsbachtal/"><i class="fa-brands fa-facebook"></i></a>
        </div>

        <div class="puppies">
            <h1>Welpenvermittlung</h1>
            <p>
                Wir züchten über einen eingetragenen Verein, den EZV. Bei Interesse an einem Eurasierwelpen empfiehlt es sich zuerst die dort angebotene 
                <a href="https://www.der-eurasier.de/wurfmeldungen/">Welpenvermittlung</a> 
                zu kontaktieren.
            </p>
        </div>

        <div class="formular">
            Kontaktformular
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

.main {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 32px 32px;
}

.contact {
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto;
    max-width: fit-content;
    gap: 0px 16px;
    margin-bottom: 8px;
    grid-column: 1/2;
    grid-row: 1;
}

.puppies {
    grid-column: 1/2;
    grid-row: 2;
}

.formular {
    grid-column: 2;
    grid-row: 1/ span 2;
    background-color: var(--backgroundColor);
}

@media (max-width: 800px) {
  .main {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    gap: 32px 32px;
    }

    .contact {
        display: grid;
        justify-content: space-between;
        grid-template-columns: auto auto;
        max-width: fit-content;
        gap: 0px 16px;
        margin-bottom: 8px;
        grid-column: 1;
        grid-row: 1;
    }

    .puppies {
        grid-column: 1;
        grid-row: 2;
    }

    .formular {
        grid-column: 1;
        grid-row: 3;
        background-color: var(--backgroundColor);
    }
}

i {
    color: var(--mainText);
    font-size: 1.6em
}

i:hover, a:hover {
    color: var(--focusedText)
}

.puppies p {
    margin-bottom: 0px;
}


</style>