<template>
  <transition name="menu">
    <div class="menu">
      <span @click="isMenuOpened = false" class="close">x</span>
      <nav class="menu-nav" v-if="!viewport.isGreaterThan('mobileWide')">
        <ul>
          <li>
            <NuxtLink
              @click="isMenuOpened = false"
              to="/tariffs"
              class="menu-nav__item"
            >
              Тарифы
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              @click="isMenuOpened = false"
              to="/contacts"
              class="menu-nav__item"
            >
              Контакты
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="menu-buttons">
        <button @click="isMenuOpened = false" class="header-btn signin">
          Вход
        </button>
        <button @click="isMenuOpened = false" class="header-btn signup">
          Регистрация
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
const isMenuOpened = useOpenMenu();
const viewport = useViewport();
</script>

<style lang="scss" scoped>
.close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  top: 20px;
  right: 20px;
}
.menu {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10000;
  width: 100%;
  padding: 30px 40px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(90deg, #000000 30%, #1c2734 73%);
}

.menu-nav {
  margin-bottom: 30px;
}

.menu-nav ul {
  text-align: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-nav li {
  margin-bottom: 10px;
}

.menu-nav a {
  text-decoration: none;
  color: white;
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-buttons button {
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: #28a745;

  color: white;
  border-radius: 5px;
}

.menu-buttons button:nth-child(2) {
  background: $blue-bright;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
