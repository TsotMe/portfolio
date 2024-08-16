<script lang="ts" setup></script>

<template>
  <div class="flex items-center gap-4 min-h-6">
    <ClientOnly>
      <a href="https://www.linkedin.com/in/tsotne-meskhuri-128773210/" target="_blank">
        <img
          v-if="$colorMode?.value === 'dark'"
          src="/assets/images/linkedin-dark.png"
          alt="Linkedin"
          loading="lazy"
        />
        <img
          v-if="$colorMode?.value === 'light'"
          src="/assets/images/linkedin-light.png"
          alt="Linkedin"
          loading="lazy"
        />
      </a>
      <a href="https://github.com/TsotMe/" target="_blank">
        <img
          v-if="$colorMode?.value === 'dark'"
          src="/assets/images/github-dark.png"
          alt="Github"
          loading="lazy"
        />
        <img
          v-if="$colorMode?.value === 'light'"
          src="/assets/images/github-light.png"
          alt="Github"
          loading="lazy"
        />
      </a>
      <a href="https://x.com/TMeskhuri" target="_blank">
        <img
          v-if="$colorMode?.value === 'dark'"
          src="/assets/images/twitter-dark.png"
          alt="Twitter"
          loading="lazy"
        />
        <img
          v-if="$colorMode?.value === 'light'"
          src="/assets/images/twitter-light.png"
          alt="Twitter"
          loading="lazy"
        />
      </a>

      <template #fallback>
        <img src="/assets/images/linkedin-light.png" alt="Linkedin" loading="lazy" />
        <img src="/assets/images/github-light.png" alt="Github" loading="lazy" />
        <img src="/assets/images/twitter-light.png" alt="Twitter" loading="lazy" />
      </template>
    </ClientOnly>
  </div>
</template>
