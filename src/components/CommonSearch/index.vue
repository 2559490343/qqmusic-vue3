<template>
  <div class="m-common-search">
    <div class="search-area">
      <van-icon name="search" />
      <span class="placeholder">
        <span class="placeholder-bold">林俊杰</span>
        <span class="placeholder-normal">为你推荐</span>
      </span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.m-common-search {
  display: flex;
  margin: 5px 15px;
  height: 40px;
  line-height: 40px;
  .search-area {
    padding: 0 10px;
    border-radius: 18px;
    background-color: #fff;
    flex: 1;
    i {
      font-size: 20px;
    }
    .placeholder {
      .placeholder-bold {
        color: #767676;
        margin: 0 10px;
      }
      .placeholder-normal {
        color: #cacaca;
      }
    }
  }
}
</style>