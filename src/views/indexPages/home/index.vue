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
    <div class="everyoneSing">
      <h1 class="common-title">
        大家都在听
        <div v-if="!playing" @click="playing = true">
          <van-icon name="play" /><span>播放</span>
        </div>
        <div v-else @click="playing = false">
          <van-icon name="pause" /><span>暂停</span>
        </div>
      </h1>
      <div id="songList">
        <div class="list-block" v-for="(item, index) in 3" :key="item">
          <div
            class="song-item"
            v-for="(it, idx) in everyoneSingList[index]"
            :key="idx"
          >
            <div class="song-img">
              <img :src="it.img" alt="" />
            </div>
            <div class="song-info">
              <div class="song-title">{{ it.title }}</div>
              <div class="song-singer">{{ it.singer }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
export default {
  setup(props, content) {
    onMounted(() => {
      // 大家都在听模块 左右拖动逻辑
      let index = 1;
      songList.ontouchstart = function (startEvent) {
        const startTouch = startEvent.changedTouches[0] || {};
        const startX = startTouch.clientX;
        const style = songList.style || {};
        let movedX = 0;
        const left = Number(style.left.replace("px", ""));
        songList.ontouchmove = function (moveEvent) {
          const moveTouch = moveEvent.changedTouches[0] || {};
          const moveingX = moveTouch.clientX;
          movedX = moveingX - startX;
          style.transition = "none";
          style.left = left + movedX + "px";
        };
        songList.ontouchend = function (endEvent) {
          // const endTouch = endEvent.changedTouches[0] || {};
          // const endX = endTouch.clientX;
          style.transition = "ease left 0.4s";
          const lastLeft = left;
          if (movedX > 0) {
            if (index > 1) {
              index--;
              style.left = left + 340 + "px";
            } else {
              style.left = lastLeft + "px";
            }
          } else {
            if (index < 3) {
              index++;
              style.left = left - 340 + "px";
            } else {
              style.left = lastLeft + "px";
            }
          }
          // console.log(left);
        };
      };
    });

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

    // 大家都在听模块
    let playing = ref(false);
    setupObj.playing = playing;
    let everyoneSingList = reactive([
      [
        { img: "", title: "PROMISE", singer: "TWICE (트와이스)" },
        {
          img: "",
          title: "无双的王者王者荣耀年度电竞主题曲 暨 2021世界冠军杯主题曲",
          singer: "G.E.M. 邓紫棋/王者荣耀",
        },
        {
          img: "",
          title: "HADASHi NO STEP《约定的灰姑娘》日剧主题曲",
          singer: "LiSA (织部里沙)",
        },
      ],
      [
        { img: "", title: "往昔《玉楼春》影视剧主题曲", singer: "陆虎" },
        { img: "", title: "我喜欢你", singer: "时代少年团" },
        { img: "", title: "How You Like That (JP Ver.)", singer: "BLACKPINK" },
      ],
      [
        {
          img: "",
          title: "相拥各自不完整《残次品·放逐星空》动画片头曲",
          singer: "张韶涵",
        },
        { img: "", title: "清福", singer: "李宇春" },
        {
          img: "",
          title: "陷入爱情《你是我的荣耀》电视剧插曲",
          singer: "硬糖少女303希林娜依·高INTO1-米卡",
        },
      ],
    ]);
    everyoneSingList.forEach((item, index) => {
      item.forEach((it, idx) => {
        it.img = `/@img/everyone${index * 3 + idx + 1}.jpg`;
      });
    });
    setupObj.everyoneSingList = everyoneSingList;

    return setupObj;
  },
  methods: {
    handleTest() {
      console.log(111);
    },
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
  .everyoneSing {
    h1 {
      display: flex;
      align-items: center;
      div {
        display: inline-block;
        font-size: 12px;
        background-color: #e2f6f0;
        padding: 0px 8px;
        border-radius: 10px;
        line-height: 25px;
        margin-left: 15px;
        i {
          color: #22d59c;
          margin-right: 5px;
          font-size: 14px;
        }
      }
    }
    #songList {
      display: flex;
      position: relative;
      left: 0;
      .list-block {
        width: 95%;
        .song-item {
          display: flex;
          .song-img {
            img {
              width: 70px;
              height: 70px;
              border-radius: 8px;
            }
          }
          .song-info {
            padding: 12px 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(100% - 100px);
            .song-title {
              font-size: 20px;
            }
            .song-singer {
              font-size: 14px;
            }
            .song-title,
            .song-singer {
              width: calc(100% - 20px);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>