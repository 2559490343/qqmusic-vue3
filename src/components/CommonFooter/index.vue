<template>
  <footer class="m-common-footer">
    <div
      class="btn-item"
      v-for="(btn, index) in btnList"
      :key="btn.label"
      @click="handleBtnClick(index)"
      :class="activeIndex === index ? 'active' : ''"
    >
      <van-icon :name="activeIndex === index ? btn.icon2 : btn.icon" />
      <span>{{ btn.label }}</span>
    </div>
  </footer>
</template>
<script>
import { reactive, ref } from "vue";
import store from "/@/store";
export default {
  setup() {
    const setupObj = {};

    //按钮列表
    let btnList = [
      {
        label: "首页",
        icon: "music-o",
        icon2: "music",
      },
      {
        label: "电台",
        icon: "stop-circle-o",
        icon2: "stop-circle",
      },
      {
        label: "视频",
        icon: "video-o",
        icon2: "video",
      },
      {
        label: "扑通",
        icon: "like-o",
        icon2: "like",
      },
      {
        label: "我的",
        icon: "manager-o",
        icon2: "manager",
      },
    ];
    setupObj.btnList = btnList;

    // 按钮active状态index
    let activeIndex = ref(0);
    setupObj.activeIndex = activeIndex;

    return setupObj;
  },
  methods: {
    handleBtnClick(index) {
      this.activeIndex = index;
      store.dispatch("setActiveMenu", index);
    },
  },
};
</script>
<style lang="less">
.m-common-footer {
  height: 50px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .btn-item {
    color: #bbb;
    span,
    i {
      display: block;
      text-align: center;
    }
    i {
      font-size: 26px;
    }
    span {
      font-size: 14px;
    }
  }
  .btn-item.active {
    color: #22d59c;
  }
}
</style>