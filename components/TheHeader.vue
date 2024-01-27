<script setup lang="ts">

</script>

<template>
<header>
  <ul>
    <li>Overview</li>
    <li>Projects</li>
  </ul>
</header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 76px;
  border-bottom: 1px solid rgba(217, 217, 217, 0.78);
  background: #FFF;

  ul {
    list-style: none;
    display: flex;
    gap: 16px;

    li {
      color: #657586;
      font-weight: 400;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
