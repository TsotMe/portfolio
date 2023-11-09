<script setup lang="ts">

</script>

<template>
    <div class="home-page">
        <h1>Hello.</h1>
        <p class="name">My name is Tsotne Meskhuri</p>
        <p>I'm web developer currently based in Georgia.</p>
<!--        Results-driven Front-End Developer with more than 2 years of experience translating design concepts into-->
<!--        responsive and intuitive user interfaces. Proficient in HTML, CSS, JavaScript, and modern front-end-->
<!--        frameworks. Adept at collaborating with cross-functional teams to deliver high-quality web applications-->
<!--        that enhance user experiences. Skilled in optimizing website performance and maintaining code integrity.-->
<!--        Committed to staying updated with industry trends and delivering innovative solutions.-->
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap');

* {
    font-family: 'Rubik', sans-serif;
}

.home-page {
    padding: 5vh 10vw;

    h1 {
        font-weight: 500;
        font-size: 4.5rem;
    }

    p.name {
        font-weight: 500;
        font-size: 2.2rem;
    }

    p {
        font-size: 1.6em;
        font-weight: 300;
        line-height: 1.4;
        max-width: 28em;
    }
}
</style>
