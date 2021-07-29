<template>
  <div class="m-indexPages">
    <CommonTabs>
      <HomePage name="recommendIndex"></HomePage>
      <LivePage name="live"></LivePage>
      <MusicHallPage name="musicHall"></MusicHallPage>
    </CommonTabs>
  </div>
</template>

<script>
import { CommonTabs } from "/@/components";
import HomePage from "./recommendIndex/index.vue";
import LivePage from "./LivePage/index.vue";
import MusicHallPage from "./musicHall/index.vue";
export default {
  components: {
    CommonTabs,
    HomePage,
    LivePage,
    MusicHallPage,
  },
  setup(prop, ctx) {},
};
</script>