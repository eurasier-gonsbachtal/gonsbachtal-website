<template>
    <div>
        <h1>A-Wurf</h1>
        <h3>01.01.2022</h3>
        <div class="image">
             <img src="../../assets/img/A-Wurf-Gruppe.jpg" alt="A-Wurf">
        </div>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div class="puppies">
            <div class="puppy">
                <h2>Arya - Miss Gelb/Pinsel</h2>
                <ImageCard/>
            </div>
            <div class="puppy">
                <h2>Aragorn - Mister Rot</h2>
                <ImageCard/>
            </div>
            <div class="puppy">
                <h2>A-Finja - Miss Weiß</h2>
                <ImageCard/>
            </div>
            <div class="puppy">
                <h2>Akira- Mister Grün</h2>
                <ImageCard/>
            </div>
            <div class="puppy">
                <h2>Archie - Mister Blau</h2>
                <ImageCard/>
            </div>
            <div class="puppy">
                <h2>Akito - Der Helle</h2>
                <ImageCard/>
            </div>
            <div class="puppy">
                <div class="title">
                    <h2>Amon - Mr. Lila</h2>
                    <i class="fa-solid fa-cross"></i>
                </div>
                
                <ImageCard/>
            </div>
        </div>

       
    </div>
</template>

<script>
import ImageCard from '../../components/ImageCard.vue';

export default {
  name: 'App',
  components: {
    ImageCard
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
    margin-bottom: 0px;
}

h3 {
    color: var(--mainTextLight);
}

.image {
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    max-width: 750px;
    width: 100%;
    height: auto;
    margin-bottom: 32px;
    border-radius: 8px;
}
p {
    margin-bottom: 64px;
}

.puppies {
    display: grid;
    gap: 64px 0px;
}

.title {
    display: flex;
}
</style>