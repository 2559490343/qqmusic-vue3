<template>
  <div v-show="shareStore.activeTabs == name" class="m-musicHall">
    <div class="swipper">
      <Swiper :data="swiperList"></Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, defineProps, reactive } from "vue";
import { Swiper } from "/@/components";
import store from "/@/store";
const props = defineProps({
  name: {
    type: String,
    default: "musicHall",
  },
});

const shareStore = store;
const swiperList = reactive([
  {
    url: "/@/assets/img/everyone1.jpg",
  },
  {
    url: "/@/assets/img/everyone2.jpg",
  },
  {
    url: "/@/assets/img/everyone3.jpg",
  },
]);
</script>

<style lang="less">
.m-musicHall {
  width: 100%;
  padding-top: 10px;
  .swipper{
    padding: 0 10px;
  }
}
</style>