<template>
  <div class="m-common-player">
    <div class="player-area">
      <div class="player-img">
        <img :src="music1" alt="" />
        <img :src="bgMusic" alt="" class="bg-mask" />
      </div>
      <div class="player-title">那些你很冒险的梦-林俊杰</div>
      <div class="player-btns">
        <van-icon
          name="pause-circle-o"
          v-if="playing"
          @click="playing = false"
        />
        <van-icon name="play-circle-o" v-else @click="playing = true" />
        <van-icon name="bars" />
      </div>
    </div>
  </div>
</template>
<script>
import music1 from "/@/assets/img/music1.jpg";
import bgMusic from "/@/assets/img/bgMusic.png";
import { ref } from "vue";

export default {
  setup() {
    let playing = ref(false);
    setTimeout(() => {
      playing = true;
    }, 1000);
    return {
      music1,
      bgMusic,
      playing,
    };
  },
};
</script>
<style lang="less">
.m-common-player {
  padding: 0 15px;
  padding-right: 25px;
  .player-area {
    background-color: #b7c4cc;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    align-items: center;
    .player-img {
      position: relative;
      img {
        width: 50px;
        height: 50px;
      }
      .bg-mask {
        position: absolute;
        top: 0;
        left: -2px;
        width: 59px;
        height: 50px;
      }
    }
    .player-title {
      color: #fff;
      margin: 0 20px;
      max-width: 160px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .player-btns {
      color: #fff;
      font-size: 26px;
      i {
        margin: 0 5px;
      }
    }
  }
}
</style>