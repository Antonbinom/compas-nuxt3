<template>
  <section class="hero">
    <div class="hero-form">
      <h1 class="hero-title">Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
      <div class="hero-inputs">
        <div
          v-for="input in inputs"
          :key="input.name"
          :class="`hero-inputs__item ${input.name} ${input.status}`"
        >
          <label :for="input.name">{{ input.title }}</label>
          <input
            :id="input.name"
            v-model="input.value"
            @focus="input.status = ''"
            @blur="input.status = input.value ? 'valid' : 'invalid'"
            placeholder="Введите данные"
            type="text"
          />
        </div>
      </div>
      <div class="hero-buttons">
        <button @click="submitForm" class="hero-buttons__check">
          <span>Проверить штрафы</span>
          <img src="@/public/images/arrow.svg" alt="Проверить штрафы" />
        </button>
        <button @click="isModalOpened = true" class="hero-buttons__about">
          <img src="@/public/images/youtube.svg" alt="О сервисе" />
          <span class="hero-buttons__about--text">О сервисе</span>
          <span class="hero-buttons__about--time">(1 мин. 20 сек)</span>
        </button>
      </div>
      <p class="hero-policy">
        Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
        персональных данных и принимаете оферту
      </p>

      <p
        :style="{ color: submitedForm ? 'green' : 'transparent' }"
        class="hero-form__notification"
      >
        Данные отправлены
      </p>
    </div>
    <img class="hero-image" src="@/public/images/hero.png" alt="Hero" />
  </section>
</template>

<script lang="ts" setup>
const inputs = ref<
  { name: string; title: string; value: string; status: string }[]
>([
  {
    name: "number",
    title: "Номер автомобиля",
    value: "",
    status: "",
  },
  { name: "state", title: "Регион", value: "", status: "" },
  {
    name: "certificate",
    title: "Свидетельство о регистрации ТС",
    value: "",
    status: "",
  },
]);

const isModalOpened: globalThis.Ref<boolean> = useOpenModal();

const isFormValid = computed(() => inputs.value.every((input) => input.value));

const submitedForm = ref<boolean>(false);

const submitForm = () => {
  if (!isFormValid.value) {
    inputs.value.forEach((input) => !input.value && (input.status = "invalid"));
  } else {
    submitedForm.value = true;
    inputs.value.forEach((input) => ((input.value = ""), (input.status = "")));
    setTimeout(() => (submitedForm.value = false), 5000);
  }
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: space-between;
  padding-top: 79px;
  padding-bottom: 35px;
  &-form {
    width: 620px;
    margin-right: 40px;

    &__notification {
      margin-top: 20px;
      color: green;
    }
  }
  &-title {
    margin: 0;
    margin-bottom: 25px;
    font-size: 41px;
    font-weight: 700;
    line-height: 120%;
    text-align: left;
  }
  &-inputs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 15px;
    &__item {
      display: flex;
      flex-direction: column;
      & label {
        margin-bottom: 5px;
        font-size: 12px;
        line-height: 120%;
      }
      & input {
        height: 40px;
        padding: 8px;
        border-radius: 5px;
        border: 1px solid $grey;
        &:focus {
          border: 1px solid $blue-bright;
        }
      }

      &.number {
        width: 57%;
      }
      &.state {
        width: 38%;
      }
      &.certificate {
        width: 100%;
        margin-top: 16px;
      }
      &.invalid input {
        border-color: tomato;
        &::placeholder {
          color: tomato;
        }
      }
      &.valid input {
        border-color: rgb(78, 185, 78);
      }
    }
  }
  &-buttons {
    display: flex;
    &__check {
      display: flex;
      align-items: center;
      padding: 11px 20px;
      margin-right: 21px;
      font-size: 14px;
      color: $white;
      background: $blue-bright;
      @include button-hover($blue-dark);

      & img {
        width: 14px;
        height: 12px;
        margin-left: 4px;
      }
    }
    &__about {
      @include button-hover(null, null, $blue-dark);

      display: flex;
      align-items: center;
      padding: 11px 20px;
      border-radius: 7px;

      border: 1px solid $blue-bright;
      &--text {
        margin-left: 6px;
        margin-right: 4px;
        font-size: 18px;
        color: $black;
      }
      &--time {
        font-size: 15px;
        color: $blue-mid;
      }
    }
  }
  &-policy {
    font-size: 13px;
    line-height: 120%;
    color: $medium-grey;
  }
  &-image {
    height: 335px;
  }
}
</style>
