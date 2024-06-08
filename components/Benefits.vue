<template>
  <section class="benefits">
    <h2 class="benefits-title">
      Плюсы использования сервиса «Компас» для анализа штрафов
    </h2>
    <div class="benefits-cards">
      <div
        v-for="(benefit, index) in benefits"
        :key="index"
        class="benefits-cards__item"
      >
        <img class="benefits-card__image" :src="`images/${benefit.name}.svg`" />

        <div class="benefits-card__info">
          <h5 class="benefits-card__title">{{ benefit.title }}</h5>
          <p class="benefits-card__description">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { benefits } from "~/data";
</script>

<style lang="scss" scoped>
.benefits {
  padding-top: 40px;
  padding-bottom: 85px;
  &-title {
    margin: 0;
    margin-bottom: 33px;
    text-align: center;
    font-size: 34px;
    font-weight: 700;
    line-height: 120%;
  }
  &-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px;
    &__item {
      height: 151px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 41px 20px;
      border-radius: 10px;
      background: $off-white;
      border: 1px solid $light-grey;
    }
  }
  &-card {
    &__image {
      margin-right: 15px;
    }
    &__info {
      // width: 247px;
    }
    &__title {
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 120%;
      color: $blue-mid;
    }
    &__description {
      font-size: 15px;
      line-height: 120%;
    }
  }
}
</style>
