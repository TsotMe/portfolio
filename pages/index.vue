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
  <div class="bg-slate-50 font-sans dark:bg-black">
    <div
      class="h-screen my-0 bg-white ring-1 ring-zinc-100 px-10 py-8 md:mx-10 lg:mx-20 xl:max-w-[1120px] xl:mx-auto dark:bg-zinc-900 dark:ring-zinc-300/20"
    >
      <div class="flex justify-between mb-10 min-h-9">
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
      </div>

      <div class="">
        <h1 class="text-4xl mb-4 text-zinc-800 dark:text-zinc-100">Hello.</h1>
        <h2 class="text-xl mb-4 text-zinc-800 dark:text-zinc-100">My name is Tsotne Meskhuri.</h2>

        <p class="max-w-3xl text-base text-zinc-800 dark:text-zinc-100">
          I am software developer currently based in Georgia. I have a passion for web development
          and love to create web applications. I am always looking for new opportunities to learn
          and grow as a developer. When I'm not immersed in code, you'll find me playing video
          games, binge-watching my favorite series, or hitting the basketball court.
        </p>
      </div>
      <!-- <a href="https://github.com/TsotMe"></a> -->
    </div>
  </div>
</template>

<style></style>
