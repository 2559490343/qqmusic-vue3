<template>
  <header class="m-common-header">
    <ul>
      <li
        v-for="(item, index) in optionsList[0]"
        :class="activeIndex === index ? 'active' : ''"
        :key="item.value"
        @click="handleClickList(index)"
      >
        {{ item.label }}
      </li>
    </ul>
  </header>
</template>

<script>
import { reactive, ref } from "vue";
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
    setupObj.activeIndex = activeIndex;

    return setupObj;
  },
  methods: {
    handleClickList(index) {
      this.activeIndex = index;
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
    li.active::after{
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 5px;
      background-color: #22d59c;
      border-radius: 20%;
      bottom: -6px;
    }
  }
}
</style>