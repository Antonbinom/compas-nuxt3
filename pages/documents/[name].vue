<template>
  <div>
    <h1>{{ computedName.title }}</h1>
    <p>
      {{ computedName.description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { documents } from "~/data";

const route = useRoute();

const computedName = computed(() => {
  return documents.find((document) => document.url === route.path);
});
</script>
