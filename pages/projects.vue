<script lang="ts" setup>
import ccc from '/assets/images/contract-chair-company.jpg'
import dss from '/assets/images/dss.svg'
import payfast from '/assets/images/payfast.svg'

const projects = [
  {
    id: useId(),
    image: ccc,
    title: 'Contract Chair Company',
    description:
      "Contract Chair Company is a furniture company that provides high-quality furniture for businesses. I've worked on this project to help them improve their online presence.",
    link: 'https://www.thecontractchair.co.uk/'
  },
  {
    id: useId(),
    image: dss,
    title: 'Data Studio',
    description:
      "Data Studio is a data visualization tool that turns your data into informative reports and dashboards that are easy to read, easy to share, and fully customizable. I've worked on this project to help them improve their online presence.",
    link: 'https://www.datastudio.ge/'
  },
  {
    id: useId(),
    image: payfast,
    title: 'Pay Fast',
    description:
      "Pay Fast is a payment gateway that allows you to accept payments from your customers. I've worked on this project to help them improve their online presence.",
    link: 'https://www.payfast.ge/'
  }
]
</script>

<template>
  <div class="my-2 md:my-8">
    <h1 class="text-balance text-4xl font-medium mb-4 text-zinc-800 dark:text-zinc-100 md:text-5xl">
      Projects I've worked on to make a difference in the world.
    </h1>

    <p class="max-w-2xl text-base text-zinc-800 dark:text-zinc-100">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque similique delectus
      recusandae in perferendis optio, facilis sed non explicabo. Odit fugit facilis, modi dolorem
      ducimus voluptate omnis ipsa sapiente.
    </p>

    <div class="grid grid-cols-1 mt-20 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>
