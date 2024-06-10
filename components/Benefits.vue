<template>
  <div class="container">
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
          <img
            class="benefits-card__image"
            :src="`images/${benefit.name}.svg`"
          />

          <div class="benefits-card__info">
            <h5 class="benefits-card__title">{{ benefit.title }}</h5>
            <p class="benefits-card__description">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { benefits } from "~/data";
</script>

<style lang="scss" scoped>
.container {
  @include container(1156px);
}
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
    grid-template-rows: 151px 174px;
    grid-gap: 35px;
    margin-left: 11px;
    &__item {
      max-height: 174px;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 20px;
      border-radius: 10px;
      background: $off-white;
      border: 1px solid $light-grey;
    }
  }
  &-card {
    &__image {
      margin-right: 15px;
    }
    &__title {
      margin: 0;
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 120%;
      color: $blue-mid;
    }
    &__description {
      margin: 0;
      font-size: 15px;
      line-height: 120%;
    }
  }
}

@media (max-width: 1024px) {
  .benefits {
    padding-block: 20px;
    &-title {
      font-size: 32px;
    }
    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      margin-left: 0;

      &__item {
        height: 151px;
        padding: 41px 20px;
      }
    }
  }
}
@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding-inline: 15px;
  }
  .benefits {
    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      &__item {
        height: auto;
        padding: 20px 20px;
      }
    }
  }
}

@media (max-width: 576px) {
  .benefits {
    &-title {
      font-size: 23px;
    }
    &-cards {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 10px;
      &__item {
        height: auto;
        padding: 20px 20px;
      }
    }
  }
}
</style>
