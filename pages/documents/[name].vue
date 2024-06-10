<template>
  <section class="document" v-if="document">
    <Container>
      <h1 class="document-title">{{ document.title }}</h1>
      <div class="document-content">
        <div
          class="document-content__item"
          v-for="(item, index) in document.content"
          :key="index"
        >
          <h2 class="document-content__title">
            {{ item.title }}
          </h2>
          <p
            class="document-content__text"
            v-for="(txt, idx) in item.text"
            :key="idx"
          >
            {{ txt }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { documents } from "~/data";

const route = useRoute();

const document = computed(() => {
  return documents.find((document) => document.link === route.path);
});
</script>

<style lang="scss" scoped>
.document {
  padding-bottom: 40px;
  &-title {
    margin: 0;
    margin-bottom: 40px;
    font-size: 41px;
    line-height: 120%;
  }
  &-content {
    &__item:not(:last-child) {
      margin-bottom: 28px;
    }
    &__title {
      margin: 0;
      margin-bottom: 25px;
      font-size: 41px;
      line-height: 120%;
      color: #383838;
    }
    &__text {
      margin: 0;
      font-size: 18px;
      line-height: 120%;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .document-title {
    margin-bottom: 30px;
  }
  .document-content__title {
    font-size: 32px;
    margin-bottom: 20px;
  }
}
@media (max-width: 576px) {
  .document-title {
    font-size: 32px;
    margin-bottom: 30px;
  }
  .document-content__title {
    font-size: 22px;
  }
}
</style>
