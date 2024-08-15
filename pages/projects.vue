<script lang="ts" setup>
import ccc from '/assets/images/contract-chair-company.jpg'
import dss from '/assets/images/dss.svg'
import multiStepForm from '/assets/images/multi-step-form.png'

const projects = [
  {
    id: useId(),
    image: ccc,
    title: 'The Contract Chair Co',
    description:
      "The Contract Chair Co. is a furniture company that provides high-quality furniture for businesses. I've worked on this project with my team members at GRAEY.",
    link: 'https://www.thecontractchair.co.uk/'
  },
  {
    id: useId(),
    image: dss,
    title: 'DataStudio',
    description:
      "DSS - The Agreement Management Software that helps businesses manage their agreements. I've worked on this project with my colleagues at GRAEY.",
    link: 'https://www.datastudio.ge/'
  },
  {
    id: useId(),
    image: multiStepForm,
    title: 'Multi-Step Form',
    description:
      "A multi-step form that helps users to fill out the form in a more organized way. I've created this project to showcase my skills.",
    link: 'https://tsotme-multi-step-form.netlify.app/'
  }
]
</script>

<template>
  <div class="my-2 md:my-8">
    <h1 class="text-balance text-4xl font-medium mb-4 text-zinc-800 dark:text-zinc-100 md:text-5xl">
      Projects I've worked on to make a difference in the world.
    </h1>

    <p class="max-w-2xl text-base text-zinc-800 dark:text-zinc-100">
      I've had the opportunity to work on numerous projects over the years, but these are the ones
      that stand out the most. I owe a lot to my incredible colleagues their collaboration and the
      valuable lessons I've learned from them.
    </p>

    <div class="grid grid-cols-1 mt-20 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>
