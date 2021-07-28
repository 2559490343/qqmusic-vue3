<template>
  <div class="m-index">
    <CommonHeader />
    <CommonSearch> </CommonSearch>
    <main>
      <router-view></router-view>
    </main>
    <CommonPlayer />
    <CommonFooter />
  </div>
</template>
<script>
import {
  CommonHeader,
  CommonFooter,
  CommonPlayer,
  CommonSearch,
} from "/@/components";
export default {
  components: { CommonHeader, CommonFooter, CommonPlayer, CommonSearch },
};
</script>
<style lang="less">
.m-index {
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow: scroll;
  }
}
</style>