<template>
  <Header />
  <!-- <Container> -->
  <main>
    <Breadcrumbs v-if="$route.path !== '/'" />
    <slot />
  </main>
  <!-- </Container> -->
  <MobileMenu v-if="isMenuOpened" />
</template>

<script lang="ts" setup>
const isMenuOpened = useOpenMenu();
</script>

<style lang="scss">
main {
  padding-top: 60px;
}
</style>
