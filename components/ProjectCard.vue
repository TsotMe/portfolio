<script lang="ts" setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const redirectToLiveWebsite = () => {
  window.open(props.project.link, '_blank')
}
</script>

<template>
  <div
    class="p-5 cursor-pointer rounded-xl transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
    @click="redirectToLiveWebsite"
  >
    <img class="w-10 h-10 rounded-full shadow-md mb-6" :src="project?.image" alt="" />
    <h1 class="text-xl text-zinc-900 dark:text-zinc-100 mb-3">{{ project.title }}</h1>
    <p class="text-base text-zinc-600 dark:text-zinc-400">{{ project.description }}</p>
  </div>
</template>
