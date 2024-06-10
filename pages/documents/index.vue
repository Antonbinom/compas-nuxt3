<template>
  <section class="documents">
    <Container>
      <h1 class="documents-title">Документы</h1>
      <ul>
        <li v-for="(document, index) in documents" :key="index">
          <NuxtLink :to="document.link">{{ document.title }}</NuxtLink>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { documents } from "~/data";
</script>

<style lang="scss" scoped>
.documents {
  &-title {
    margin: 0;
    margin-bottom: 40px;
    font-size: 41px;
    line-height: 120%;
  }
}
</style>
