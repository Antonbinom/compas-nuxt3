<template>
  <section class="documents">
    <h2 class="documents-title">Документы</h2>
    <div class="documents-slider">
      <Swiper
        :modules="[Navigation, Pagination, Scrollbar]"
        :slides-per-view="3"
        :space-between="35"
        :scrollbar="{ draggable: true }"
        :navigation="{ prevEl: '.arrow-left', nextEl: '.arrow-right' }"
        :loop="true"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="(document, index) in documents" :key="index">
          <SliderCard :document="document" />
        </SwiperSlide>
        <button class="arrow-left arrow">
          <img src="~/public/images/arrow-left.svg" alt="arrow left" />
        </button>
        <button class="arrow-right arrow">
          <img src="~/public/images/arrow-right.svg" alt="arrow right" />
        </button>
      </Swiper>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { documents } from "~/data";
</script>

<style lang="scss" scoped>
$arrow-dimension: 80px;

.documents {
  max-width: 1148px;
  padding: 40px 0 85px;

  &-title {
    margin: 0 0 33px;
    text-align: center;
    font-size: 34px;
    font-weight: 700;
    line-height: 12px;
  }
}
.swiper {
  padding: 20px;
  padding-bottom: 30px;
  position: relative;

  .arrow {
    display: flex;
    align-items: center;
    width: 40px;
    height: $arrow-dimension;
    background: #a6b7d4;
    opacity: 0.47;
    position: absolute;
    top: 50%;
    z-index: 1;
    padding: 0;
    transform: translateY(-50%);
    @include button-hover($black);
  }

  .arrow-left,
  .arrow-right {
    img {
      margin: 0 7px;
    }
  }

  .arrow-left {
    left: 0;
    justify-content: flex-start;
    border-radius: 0 $arrow-dimension $arrow-dimension 0;
  }

  .arrow-right {
    right: 0;
    justify-content: flex-end;
    border-radius: $arrow-dimension 0 0 $arrow-dimension;
  }
  .swiper-wrapper {
    padding-bottom: 30px;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 0px !important;
  }
}
</style>
