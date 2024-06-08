<template>
  <Hero />
  <Benefits />
  <Documents />
  <Modal v-if="isModalOpened" />
</template>

<script lang="ts" setup>
const isModalOpened = useOpenModal();
</script>
