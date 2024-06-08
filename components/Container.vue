<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  max-width: 1156px;
  margin: 0px auto;
}
@media (max-width: 767.98px) {
  .container {
    margin: 0px;
    padding: 0px 15px;
    max-width: 100%;
  }
}
</style>
