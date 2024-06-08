<template>
  <header class="header">
    <Container>
      <div class="header-wrapper">
        <nav class="header-nav">
          <NuxtLink to="/" class="logo">
            <img src="@/public/images/logo.svg" alt="logo" />
          </NuxtLink>
          <NuxtLink to="/tariffs" class="header-nav__item"> Тарифы </NuxtLink>
          <NuxtLink to="/contacts" class="header-nav__item">
            Контакты
          </NuxtLink>
        </nav>
        <div class="header-right">
          <a href="tel:+74951184422" class="phone"> +7 495 118-44-22</a>
          <NuxtLink to="/" class="header-nav__item"> Вход </NuxtLink>
          <button class="header-btn">Регистрация</button>
        </div>
      </div>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: linear-gradient(90deg, #000000 30%, #1c2734 73%);
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 17px;
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
    gap: 30px;
    & .phone {
      font-weight: 700;
      line-height: 130%;
      color: $white;
    }
  }
  &-btn {
    padding: 9px 18px;
    font-size: 15px;
    line-height: 130%;
    background: $blue-bright;
    color: $white;
    @include button-hover($blue-dark);
  }
}
.phone {
  @include button-hover(null, $orange);
}
</style>
