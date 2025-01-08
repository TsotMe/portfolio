<script lang="ts" setup>
import ccc from '/assets/images/contract-chair-company.jpg'
import dss from '/assets/images/dss.svg'
import multiStepForm from '/assets/images/multi-step-form.png'
import wildOasisWebsite from '/assets/images/wild-oasis-website.png'
import fastPizzaCo from '/assets/images/fast-pizza-co.png'

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
    image: wildOasisWebsite,
    title: 'The Wild Oasis (Customer Facing)',
    description:
      'The Wild Oasis Website is a customer facing website for The Wild Oasis hotel. This project serves as an example of my skills in action.',
    link: 'https://tsotme-the-wild-oasis-website.vercel.app/'
  },
  {
    id: useId(),
    image: wildOasisWebsite,
    title: 'The Wild Oasis (Internal App)',
    description:
      'The Wild Oasis is internal hotel managment app, hotel staff can manage their cabins, guests, bookings, and more. This project serves as an example of my skills in action.',
    link: 'https://tsotme-wild-oasis.netlify.app/'
  },
  {
    id: useId(),
    image: fastPizzaCo,
    title: 'Fast Pizza Co.',
    description:
      'Fast Pizza Co. is a pizza delivery company that provides high-quality pizza for customers. I designed this project to reflect my capabilities.',
    link: 'https://tsotme-fast-pizza.netlify.app/'
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
  <div class="my-2 md:my-8 overflow-auto">
    <h1 class="text-balance text-4xl font-medium mb-4 text-zinc-800 dark:text-zinc-100 md:text-5xl">
      Projects I've worked on to make a difference in the world.
    </h1>

    <p class="max-w-2xl text-base text-zinc-800 dark:text-zinc-100">
      I've had the opportunity to work on numerous projects over the years, but these are the ones
      that stand out the most. I owe a lot to my incredible colleagues their collaboration and the
      valuable lessons I've learned from them.
    </p>

    <div
      class="mt-10 overflow-auto scrollbar-thin scrollbar-width: thin scrollbar-thumb-rounded-full scrollbar-thumb-zinc-100 scrollbar-track-white dark:scrollbar-thumb-zinc-800 dark:scrollbar-track-zinc-900 sm:max-h-fit sm:overflow-visible md:max-h-[calc(100vh-633px)] md:mt-14 lg:mt-20 lg:max-h-[calc(100vh-562px)] md:overflow-auto"
    >
      <div class="mr-3 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </div>
</template>
