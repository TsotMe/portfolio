<script lang="ts" setup></script>

<template>
  <div class="bg-slate-50 font-sans dark:bg-black">
    <div
      class="h-screen my-0 bg-white flex flex-col gap-10 ring-1 ring-zinc-100 px-10 py-8 md:mx-10 lg:mx-20 xl:max-w-[1120px] xl:mx-auto dark:bg-zinc-900 dark:ring-zinc-300/20"
    >
      <AppHeader />

      <main class="flex-grow">
        <slot />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
