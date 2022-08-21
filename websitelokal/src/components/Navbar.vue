<template>
     <nav id="navbar">
         <ul>
             <li><a href="" class="active">Startseite</a></li>
             <li><a href="">Über uns</a></li>
             <li><a href="">Unsere Zuchtstätte</a></li>
             <li><a href="">Der Eurasier</a></li>
             <li><a href="">Spaziergänge</a></li>
             <li><a href="">Kontakt</a></li>
         </ul>
     </nav>
</template>

<style scoped>
:root {
  --backgroundColor: #dcdece;
  --mainText: #333D29;
  --linkText: #936639;
  --focusedText: #582F0E;
  --higlightedText: #04A0A2;
}

#navbar {
    background-color: var(--backgroundColor);
    padding: 8px;
    margin-bottom: 8px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
    display: inline-block; 
    text-align: center;
}

li a {
  display: block;
  text-align: center;
  padding: 8px 16px 4px 16px;
  text-decoration: none;
  color: var(--mainText);
  font-size: 1.2em;
}

li a:hover {
  color: var(--focusedText);
}

.active {
    color: var(--mainText);
    border-bottom: 2px solid var(--mainText);
}
.active:hover {
  color: var(--focusedText);
  border-bottom: 2px solid var(--focusedText);
}

</style>