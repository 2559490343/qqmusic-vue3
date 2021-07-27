<template>
  <div class="m-index">
    <CommonHeader />
    <main>
      <router-view></router-view>
    </main>
    <CommonFooter />
  </div>
</template>
<script>
import { CommonHeader, CommonFooter } from "/@/components";
export default {
  components: { CommonHeader, CommonFooter },
};
</script>
<style lang="less">
.m-index {
  height: 100%;
  display: flex;
  flex-direction: column;
  main{
    flex: 1;
    overflow: scroll;
  }
}
</style>