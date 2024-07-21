<script lang="ts" setup>
import darkIcon from '/assets/images/dark-mode.png'
import lightIcon from '/assets/images/light-mode.png'
import callbackIcon from '/assets/images/callback.png'

const colorMode = useColorMode()

const localMode = useCookie('color-mode')

const handleModeChange = () => {
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
    localMode.value = 'light'
  } else {
    colorMode.preference = 'dark'
    localMode.value = 'dark'
  }
}

const modeButtonIconPath = computed(() => {
  if (colorMode.preference !== 'system') {
    localMode.value = colorMode.preference
  }

  switch (localMode.value) {
    case 'dark':
      return darkIcon
    case 'light':
      return lightIcon
    default:
      return callbackIcon
  }
})
</script>

<template>
  <header class="flex justify-between mb-10 min-h-9">
    <nav
      class="flex items-center gap-4 no-underline text-sm text-zinc-800 dark:text-zinc-100 cursor-pointer"
    >
      <NuxtLink href="">About</NuxtLink>
      <NuxtLink href="">Projects</NuxtLink>
      <NuxtLink href="">Services</NuxtLink>
      <NuxtLink href="">Contact</NuxtLink>
    </nav>

    <button
      class="min-w-9 min-h-9 p-1.5 rounded-full ring-1 ring-zinc-100 dark:ring-zinc-300/20 dark:hover:ring-white/20"
      @click="handleModeChange"
    >
      <img :src="modeButtonIconPath" alt="Mode icon" />
    </button>
  </header>
</template>

<style scoped></style>
