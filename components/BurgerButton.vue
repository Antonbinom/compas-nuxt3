<template>
  <button
    class="burger-button"
    @click="!isMenuOpened && (isMenuOpened = !isMenuOpened)"
  >
    <span :class="{ active: isMenuOpened }"></span>
    <span :class="{ active: isMenuOpened }"></span>
    <span :class="{ active: isMenuOpened }"></span>
  </button>
</template>

<script setup lang="ts">
const isMenuOpened = useOpenMenu();
</script>

<style lang="scss" scoped>
.burger-button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.burger-button span {
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background-color: $white;
}
</style>
