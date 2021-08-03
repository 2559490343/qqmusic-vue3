<template>
  <div v-show="shareStore.activeTabs == name ">
    live
  </div>
</template>
<script>
import { ref, inject } from "vue";
import store from "/@/store";
export default {
  props: {
    name: {
      type: String,
      default: "live",
    },
  },
  setup() {
    const setupObj = {};
    setupObj.shareStore = store;
    return setupObj;
  },
};
</script>