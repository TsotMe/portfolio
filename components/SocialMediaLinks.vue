<script lang="ts" setup>
const currentMode = useCookie('color-mode')
</script>

<template>
  <div class="flex items-center gap-4">
    <a href="https://www.linkedin.com/in/tsotne-meskhuri-128773210/" target="_blank">
      <img v-if="currentMode === 'dark'" src="/assets/images/linkedin-dark.png" alt="" />
      <img v-if="currentMode === 'light'" src="/assets/images/linkedin-light.png" alt="" />
    </a>
    <a href="https://github.com/TsotMe/" target="_blank">
      <img v-if="currentMode === 'dark'" src="/assets/images/github-dark.png" alt="" />
      <img v-if="currentMode === 'light'" src="/assets/images/github-light.png" alt="" />
    </a>
    <a href="https://x.com/TMeskhuri" target="_blank">
      <img v-if="currentMode === 'dark'" src="/assets/images/twitter-dark.png" alt="" />
      <img v-if="currentMode === 'light'" src="/assets/images/twitter-light.png" alt="" />
    </a>
  </div>
</template>
