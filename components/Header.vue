<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-left">
          <NuxtLink to="/" class="logo">
            <img src="@/public/images/logo.svg" alt="logo" />
          </NuxtLink>

          <nav class="header-nav" v-if="viewport.isGreaterThan('mobileWide')">
            <NuxtLink to="/tariffs" class="header-nav__item"> Тарифы </NuxtLink>
            <NuxtLink to="/contacts" class="header-nav__item">
              Контакты
            </NuxtLink>
          </nav>
        </div>
        <div class="header-right">
          <a href="tel:+74951184422" class="phone"> +7 495 118-44-22</a>
          <button
            v-if="viewport.isGreaterThan('mobileWide')"
            class="header-btn signin"
          >
            Вход
          </button>
          <button
            v-if="viewport.isGreaterThan('mobileWide')"
            class="header-btn signup"
          >
            Регистрация
          </button>
          <BurgerButton v-if="viewport.isLessThan('tablet')" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const viewport = useViewport();
</script>

<style lang="scss" scoped>
.container {
  @include container(1161px);
}
.header {
  position: fixed;
  z-index: 100;
  width: 100%;
  background: linear-gradient(90deg, #000000 30%, #1c2734 73%);
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 11px;
  }
  &-left {
    display: flex;
    & .logo {
      display: flex;
      margin-right: 30px;
    }
  }
  &-nav {
    display: flex;
    align-items: center;
    gap: 30px;
    &__item {
      font-size: 18px;
      line-height: 130%;
      color: $white;
      @include button-hover(null, $blue-bright);
    }
  }
  &-right {
    display: flex;
    align-items: center;
    gap: 25px;
    & .phone {
      font-weight: 700;
      line-height: 130%;
      color: $white;
    }
  }
  &-btn {
    &.signup {
      font-weight: "PT Sans";
      padding: 9px 18px;
      font-size: 15px;
      line-height: 130%;
      background: $blue-bright;
      color: $white;
      @include button-hover($blue-dark);
    }
    &.signin {
      background: none;
      font-size: 18px;
      line-height: 130%;
      color: $white;
      @include button-hover(null, $orange);
    }
  }
}
.phone {
  @include button-hover(null, $orange);
}
@media (max-width: 767.99px) {
  .header {
    padding-block: 10px;
  }
}
@media (max-width: 400px) {
  .header-right {
    gap: 15px;
  }
  .logo img {
    width: 80px;
  }
  .phone {
    font-size: 14px;
  }
}
</style>
