<template>
  <div class="m-common-tabs" id="commonTabs">
      <slot> </slot>
  </div>
</template>
<script>
import { onMounted } from "vue";
import store from "/@/store";
export default {
  setup(props, { emit, slots }) {
    // let tabList = slots.default ? slots.default() : [];
    // return {
    //   tabList,
    // };
  },
  methods: {},
};
</script>
<style lang="less">
.m-common-tabs {
  display: flex;
  position: relative;
  // overflow-x: hidden;
}
</style>