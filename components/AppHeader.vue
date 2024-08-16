<script lang="ts" setup>
import darkIcon from '/assets/images/dark-mode.png'
import lightIcon from '/assets/images/light-mode.png'

// const colorMode = useColorMode()

// const handleModeChange = () => {
//   if (colorMode.preference === 'system') {
//     colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
//   } else {
//     colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
//   }
// }

// const modeButtonIconPath = computed(() => {
//   if (colorMode.value === 'dark') {
//     return darkIcon
//   } else {
//     return lightIcon
//   }
// })
</script>

<template>
  <header class="flex justify-between min-h-9">
    <Navigation />

    <!-- <button
      class="min-w-9 min-h-9 p-1.5 rounded-full ring-1 ring-zinc-100 dark:ring-zinc-300/20 dark:hover:ring-white/20"
      @click="handleModeChange"
    >
      <ClientOnly>
        <img :src="modeButtonIconPath" alt="Mode" loading="lazy" />

        <template #fallback>
          <img :src="lightIcon" alt="Mode" loading="lazy" />
        </template>
      </ClientOnly>
    </button> -->
  </header>
</template>

<style scoped></style>
