<template>
  <header class="m-common-header">
    <ul>
      <li
        v-for="(item, index) in optionsList[shareStore.activeMenu]"
        :class="activeIndex === index ? 'active' : ''"
        :key="item.value"
        @click="handleClickList(item, index)"
      >
        {{ item.label }}
      </li>
    </ul>
  </header>
</template>

<script>
import { reactive, ref } from "vue";
import store from "/@/store";
export default {
  name: "commonHeader",
  setup() {
    const setupObj = {};
    // 头部选项列表list
    const optionsList = reactive([
      [
        {
          label: "推荐",
          value: "recommendIndex",
        },
        {
          label: "音乐馆",
          value: "musicHall",
        },
        {
          label: "直播",
          value: "live",
        },
      ],
      [
        {
          label: "推荐",
          value: "recommendDj",
        },
        {
          label: "博客",
          value: "podcast",
        },
      ],
      [],
      [
        {
          label: "广场",
          value: "square",
        },
        {
          label: "关注",
          value: "follow",
        },
      ],
      [
        {
          label: "我的",
          value: "mine",
        },
      ],
    ]);
    setupObj.optionsList = optionsList;

    //选项选中active
    let activeIndex = ref(0);
    // let color = ref("red");
    // setupObj.color = color;
    setupObj.activeIndex = activeIndex;

    setupObj.shareStore = store;
    return setupObj;
  },
  methods: {
    handleClickList(item, index) {
      this.activeIndex = index;
      this.color = "black";
      store.dispatch("setActiveTabs", item.value);
    },
  },
};
</script>
<style lang="less">
.m-common-header {
  height: 50px;
  ul {
    display: flex;
    height: 100%;
    padding: 0 15px;
    align-items: center;
    li {
      margin-right: 20px;
      font-size: 19px;
    }
    li.active {
      font-size: 21px;
      font-weight: 600;
      position: relative;
    }
    li.active::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 5px;
      background-color: #22d59c;
      // background-color: v-bind(color);
      border-radius: 20%;
      bottom: -6px;
    }
  }
}
</style>