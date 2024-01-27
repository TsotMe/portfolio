<script setup>

</script>

<template>
<div class="app">
  <TheHeader/>
  <NuxtPage/>
  <TheFooter/>
</div>
</template>

<style scoped lang="scss">
.app {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
}
</style>
