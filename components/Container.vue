<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include container(1164px);
}

@media (max-width: 767.98px) {
  .container {
    max-width: 100%;
    padding-inline: 15px;
  }
}
</style>
