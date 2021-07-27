<template>
  <div class="m-home">
    <div class="todayRecommend">
      <h1 class="common-title">Hi 新生 今日为你推荐</h1>
      <ul class="todayRecList">
        <li v-for="item in todayRecList" :key="item.img">
          <img :src="item.img" alt="" />
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>
    <div class="songSheet">
      <h1 class="common-title">你的私荐歌单</h1>
      <div class="listArea">
        <ul class="songSheetList1">
          <li v-for="item in songSheetList[0]" :key="item.img">
            <img :src="item.img" alt="" />
            <span>{{ item.title }}</span>
            <div class="play-count">
              <van-icon name="play" />
              <span>{{ item.playCount }}</span>
            </div>
          </li>
        </ul>
        <ul class="songSheetList2">
          <li v-for="item in songSheetList[1]" :key="item.img">
            <img :src="item.img" alt="" />
            <span>{{ item.title }}</span>
            <div class="play-count">
              <van-icon name="play" />
              <span>{{ item.playCount }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const setupObj = {};

    //  今日推荐模块
    let todayRecList = reactive([
      {
        title: "习以为常-尧顺宇",
      },
      {
        title: "每日30首",
      },
      {
        title: "百万收藏",
      },
      {
        title: "新歌推荐",
      },
      {
        title: "播客60秒",
      },
      {
        title: "K歌不停",
      },
    ]);
    todayRecList.forEach(
      (item, index) => (item.img = `/@/assets/img/today${index + 1}.jpg`)
    );
    setupObj.todayRecList = todayRecList;

    // /私荐歌单模块
    let songSheetList = reactive([
      [
        { title: "华语| 原住民之歌" },
        { title: "华语| 早安民谣" },
        { title: "最·Thundercat" },
        { title: "华语| 忆故乡" },
        { title: "韩语｜情歌二重唱" },
      ],
      [
        { title: "华语流行|想度假" },
        { title: "华语| 厨房时间" },
        { title: "Urban厂牌合辑| HI-LITE RECORDS" },
        { title: "华语 | 一起野餐吧" },
        { title: "轻音乐 | 心在旅行" },
      ],
    ]);
    songSheetList.forEach((item, index) => {
      item.forEach((i, idx) => {
        i.playCount = `${index * 5 + idx + 1}${parseInt(
          Math.random() * 10
        )}0万`;
        i.img = `/@/assets/img/songsheet${index * 5 + idx + 1}.jpg`;
      });
    });
    setupObj.songSheetList = songSheetList;

    return setupObj;
  },
};
</script>
<style lang="less">
.m-home {
  padding-left: 15px;
  overflow-x: hidden;
  .todayRecommend {
    .todayRecList {
      overflow-x: scroll;
      display: flex;
      li {
        margin-right: 10px;
        img {
          width: 130px;
          height: 130px;
          border-radius: 10px;
        }
      }
    }
  }
  .songSheet {
    .listArea {
      overflow-x: scroll;
      ul {
        display: flex;
        margin-bottom: 10px;
        li {
          margin-right: 10px;
          position: relative;
          img {
            width: 130px;
            height: 130px;
            border-radius: 10px;
          }
          span {
            display: block;
            max-width: 130px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .play-count {
            position: absolute;
            display: flex;
            align-items: center;
            left: 0;
            top: 100px;
            background-color: #b38f97;
            padding: 5px 8px;
            padding-left: 5px;
            text-align: center;
            border-radius: 20px;
            color: #fff;
            i {
              font-size: 18px;
              margin-right: 3px;
            }
            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>