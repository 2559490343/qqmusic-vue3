<template>
  <div class="m-swiper">
    <div class="swiper-box" id="swiperBox">
      <!-- <div class="swiper-item">
        <img :src="data[data.length - 1].url" alt="" />
      </div> -->
      <div class="swiper-item" v-for="item in data" :key="item.url">
        <img :src="item.url" alt="" />
      </div>
      <div class="swiper-item">
        <img :src="data[0].url" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, reactive } from "vue";

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  duration: {
    type: Number,
    default: 3000,
  },
});
onMounted(() => {
  let index = 1; // 记录当前进行到哪个swiper-item
  let timer = null; //记录自动滚动定时器对象
  // 滚动box的touch事件
  swiperBox.ontouchstart = function (startEvent) {
    clearInterval(timer);
    const startTouch = startEvent.changedTouches[0] || {};
    const startX = startTouch.clientX;
    const style = swiperBox.style || {};
    let movedX = 0;
    const left = Number(style.left.replace("px", ""));
    swiperBox.ontouchmove = function (moveEvent) {
      const moveTouch = moveEvent.changedTouches[0] || {};
      const moveingX = moveTouch.clientX;
      movedX = moveingX - startX;
      style.transition = "none";
      style.left = left + movedX + "px";
    };
    swiperBox.ontouchend = function (endEvent) {
      timer = transiform(props.duration);
      const endTouch = endEvent.changedTouches[0] || {};
      const endX = endTouch.clientX;
      style.transition = "ease left 0.4s";
      if (endX - startX < 30 && endX - startX > -30) {
        style.left = left + "px";
        return;
      }
      const lastLeft = left;
      if (movedX > 0) {
        if (index > 1) {
          index--;
          style.left = left + 355 + "px";
        } else {
          style.left = lastLeft + "px";
        }
      } else {
        if (index < props.data.length + 1) {
          style.left = left - 355 + "px";
          index++;
          if (index == props.data.length + 1) {
            setTimeout(() => {
              style.transition = "none";
              style.left = "0px";
              index = 1;
            }, 400);
          }
        } else {
          style.left = lastLeft + "px";
        }
      }
    };
  };
  // 自动滚动函数
  function transiform(duration) {
    return setInterval(() => {
      const style = swiperBox.style || {};
      const left = Number(style.left.replace("px", ""));
      style.transition = "ease left 0.4s";
      if (index < props.data.length + 1) {
        style.left = left - 355 + "px";
        index++;
        if (index == props.data.length + 1) {
          setTimeout(() => {
            style.transition = "none";
            style.left = "0px";
            index = 1;
          }, 400);
        }
      }
    }, duration);
  }
  timer = transiform(props.duration);
});
</script>
<style lang="less">
.m-swiper {
  width: 100%;
  height: 130px;
  position: relative;
  overflow: hidden;
  .swiper-box {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    left: 0;
    top: 0;
    .swiper-item {
      min-width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>