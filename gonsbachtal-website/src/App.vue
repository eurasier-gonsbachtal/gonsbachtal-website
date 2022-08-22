<template>
<body id = "body">
            <div id="content">
                <header id="header">
                   <Navbar/>
                </header>

                <div id = "mainContainer">
                    <router-view/>
                </div>

                <footer>
                    <Footer/>
                </footer>
            </div>
            
        </body>
    
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
}
}
</script>

<style>
:root {
  --backgroundColor: #dcdece;
  --mainText: #333D29;
  --mainTextLight: #70875A;
  --linkText: #936639;
  --focusedText: #582F0E;
  --higlightedText: #04A0A2;
}

* {
  margin: 0;
  padding: 0;
}

#content {
    max-width: 70%;
    min-width: 500px;
    margin: 0px auto;
}

@media screen and (max-width: 768px) {
    #content {
        margin: 0px 0px;
        max-width: 100%;
    }
}

body {
    font-family: "Avenir", Verdana, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--mainText);
    background-color: var(--backgroundColor);
    margin: 0px;
    padding-top: 16px;
}

#logo {
    width: 40%;
    height: auto;
    margin-bottom: 32px;
}

@media(max-width: 800px) {
    #logo {
        width: 60%;
    }
}

#mainContainer {
    background-color: white;
    padding: 64px;
    text-align: left;
    border-radius: 8px;
}

h1 {
    color: var(--mainText);
    font-size: 2em;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 16px;
}

h2 {
    color: var(--mainText);
    font-size: 1.6em;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 8px;
}

h3 {
    color: var(--mainText);
    font-size: 1.4em;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 4px;
}

h4 {
    color: var(--mainText);
    font-size: 1.4em;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 4px;
}

p {
    color: var(--mainText);
    font-size: 1em;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 8px;
    text-align: justify;
}

p.cursiv {
    color: var(--mainText);
    font-size: 1em;
    font-style: italic;
    font-weight: normal;
}

p.bold {
    color: var(--mainText);
    font-size: 1em;
    font-style: normal;
    font-weight: bold;
}

p.light {
    color: var(--mainTextLight);
    font-size: 1em;
    font-style: normal;
    font-weight: normal;
}

p.light-bold {
    color: var(--mainTextLight);
    font-size: 1em;
    font-style: normal;
    font-weight: bold;
}

a {
    color: var(--linkText);
}
a:hover {
    color: var(--focusedText);
}
a:focus {
    color: var(--linkText);
}
</style>
