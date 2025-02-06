<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  titleTemplate: 'TsotMe',
  meta: [
    { name: 'title', content: 'Tsotne Meskhuri | Portfolio' },
    { name: 'ogTitle', content: 'Tsotne Meskhuri | Portfolio' },
    {
      name: 'description',
      content:
        "Explore the portfolio and work of Me. Learn more about my expertise, achievements, and the projects I'm passionate about."
    },
    {
      name: 'ogDescription',
      content:
        "Explore the portfolio and work of Me. Learn more about my expertise, achievements, and the projects I'm passionate about."
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  min-height: 100dvh;
}
</style>
