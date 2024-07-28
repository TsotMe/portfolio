<script lang="ts" setup>
const currentMode = useCookie('color-mode')
</script>

<template>
  <div class="h-full my-2 md:my-8">
    <h1 class="text-4xl mb-4 font-medium text-zinc-800 dark:text-zinc-100 md:text-5xl">Hello.</h1>
    <h2 class="text-2xl mb-4 text-zinc-800 dark:text-zinc-100">My name is Tsotne Meskhuri.</h2>

    <p class="max-w-2xl mb-4 text-base text-zinc-800 dark:text-zinc-100">
      I am software developer currently based in Georgia. I am passionate about using programming
      tools to help people solve their problems. By leveraging my technical skills, I can create
      innovative solutions that streamline operations, improve efficiency, and drive growth for
      businesses.
    </p>

    <p class="max-w-2xl mb-4 text-base text-zinc-800 dark:text-zinc-100">
      My goal is to empower others to achieve their objectives through the power of technology. I
      really enjoy with feel of creating something new and useful.
    </p>

    <p class="text-balance max-w-2xl mb-4 text-base text-zinc-800 dark:text-zinc-100">
      I am always looking for new opportunities to learn and grow as a developer. Have a project in
      mind or just want to chat? Reach out to me at
      <a href="mailto:tsotnemeskhuri@gmail.com">
        <img
          v-if="currentMode === 'dark'"
          src="/assets/images/email-dark.png"
          alt=""
          class="inline"
        />
        <img
          v-if="currentMode === 'light'"
          src="/assets/images/email-light.png"
          alt=""
          class="inline"
        />
      </a>
      or
      <a href="https://www.linkedin.com/in/tsotne-meskhuri-128773210/" target="_blank">
        <img
          v-if="currentMode === 'dark'"
          src="/assets/images/linkedin-dark.png"
          alt=""
          class="inline"
        />
        <img
          v-if="currentMode === 'light'"
          src="/assets/images/linkedin-light.png"
          alt=""
          class="inline"
        />
      </a>
    </p>
    <p class="max-w-2xl mb-4 text-base text-zinc-800 dark:text-zinc-100">
      When I'm not immersed in code, I enjoy playing basketball. I play every weekend at the park
      near my house. Sometimes I play with my friends, sometimes with strangers. My friend got me
      into it, because he loves sports. I didn't like it at first, because it was hard and lost all
      the time (like programming), but now I enjoy it. I also like to read books and watch series.
    </p>
  </div>
</template>
