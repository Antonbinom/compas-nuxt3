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
  width: 90%;
  background-color: transparent;
}

iframe {
  width: 100%;
  height: 90vh;
}

.close {
  color: #fff;
  float: right;
  font-size: 28px;
  cursor: pointer;
}

@media (max-width: 1024px) {
  iframe {
    width: 100%;
    height: 100vh;
  }
}
@media (max-width: 576px) {
  .modal-content {
    width: 100%;
  }

  iframe {
    width: 100%;
    height: 90vh;
  }
}
</style>
