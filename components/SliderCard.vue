<template>
  <div v-if="document" class="documents-item">
    <div class="document-item__info">
      <h4 class="documents-item__title">{{ document.title }}</h4>
      <p class="documents-item__description">
        {{ document.description }}
      </p>
    </div>
    <NuxtLink :to="document.url" class="documents-item__btn">
      Перейти
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  document: Object,
});
</script>

<style lang="scss" scoped>
.documents {
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 450px;
    padding: 25px;
    border: 1px solid $light-grey;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);

    &__title {
      margin: 0 0 15px;
      font-size: 31px;
      font-weight: 700;
      line-height: 120%;
      color: $blue-dark;
    }

    &__description {
      margin: 0;
      font-size: 18px;
      line-height: 120%;
    }

    &__btn {
      width: 100%;
      padding: 11px;
      font-size: 18px;
      color: $white;
      text-align: center;
      border-radius: 7px;
      background: $blue-bright;
      @include button-hover($blue-dark);
    }
  }
}
</style>
