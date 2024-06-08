<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="isModalOpened = false">&times;</span>
      <iframe
        src="https://www.youtube.com/embed/vwIUJbIU57s?si=JV_BIvxOovUUMifc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isModalOpened = useOpenModal();
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  position: relative;
  max-width: 960px;
  margin: auto;
  background-color: transparent;
}

iframe {
  width: 960px;
  height: 555px;
}

.close {
  color: #fff;
  float: right;
  font-size: 28px;
  cursor: pointer;
}
</style>
