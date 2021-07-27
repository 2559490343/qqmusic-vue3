<template>
  <header class="m-common-header"></header>
</template>

<script>
import { reactive } from "vue";
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




    
    return setupObj;
  },
};
</script>
<style lang="less">
.m-common-header {
  height: 50px;
  background-color: #f2f2f2;
}
</style>