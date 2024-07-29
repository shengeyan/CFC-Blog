<template>
  <!-- 尾部 tail -->
  <div>
    <div
      class="tail-picture"
      :style="{ background: `url(${tailPicture})` }"
      style="
        width: 200px;
        height: 200px;
        position: fixed;
        bottom: 0;
        z-index: 100;
        background-size: 100%;
        transform: rotateY(180deg);
      "
    ></div>
    <div
      class="tail-border"
      :style="{ background: `url(${tailBorder}) 0 0 repeat-x` }"
      style="height: 3px; width: 100%; position: fixed; background-size: 10px 3px; z-index: 80; bottom: 36px"
    ></div>
    <div class="tail-font">
      <div class="m-l-200px float-left">
        <div class="text-14px hover:text-[--el-color-primary]">『🔥🔥🔥』</div>
        <div class="text-14px hover:text-[--el-color-primary]" @click="handleBeiAn">『Crazy For Code』</div>
      </div>
      <div class="float-right m-t-8px m-r-16px">
        <div class="h-18px text-16px hover:text-[--el-color-primary]">自 xxxx-xx-xx 建站以来，小站已苟活：{{ koiRunTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import { getAssets } from "@/utils/index";

const tailPicture = ref(`${getAssets("images/bg/tailPicture.webp")}`);
const tailBorder = ref(`${getAssets("images/bg/tailBorder.png")}`);
// 本站运行时间
const koiRunTime = ref();
let timer = window.setInterval(function handleRunTime() {
  let stayTimeGap = new Date().getTime() - new Date("2024-05-20 00:00:00").getTime();
  let stayDay = Math.floor(stayTimeGap / (3600 * 1000 * 24));
  let leave = stayTimeGap % (3600 * 1000 * 24);
  let stayHour = Math.floor(leave / (3600 * 1000));
  let leave1 = leave % (3600 * 1000);
  let stayMin = Math.floor(leave1 / (60 * 1000));
  let leave2 = leave1 % (60 * 1000);
  let staySec = Math.floor(leave2 / 1000);
  koiRunTime.value = stayDay + "天" + stayHour + "时" + stayMin + "分" + staySec + "秒";
}, 1000);

onBeforeUnmount(() => {
  clearInterval(timer);
});

// 备案网址
const handleBeiAn = () => {
  window.open("https://blog.crazyforcode.org/", "_blank");
};
</script>

<style lang="scss" scoped>
/** 底部浮动样式开始 */
// .tail-picture {
//   background: url("@/assets/images/bg/tailPicture.webp");
//   width: 200px;
//   height: 200px;
//   position: fixed;
//   bottom: 0;
//   z-index: 100;
//   background-size: 100%;
//   transform: rotateY(180deg);
// }

// .tail-border {
//   background: url("@/assets/images/bg/tailBorder.png") 0 0 repeat-x;
//   height: 3px;
//   width: 100%;
//   position: fixed;
//   background-size: 10px 3px;
//   z-index: 80;
//   bottom: 36px;
// }

.tail-font {
  width: 100%;
  height: 36px;
  position: fixed;
  bottom: 0;
  z-index: 90;
  box-shadow: 0 -2px 10px rgb(0 0 0 / 10%);
  color: #4c4e4d;
  @apply dark:text-#D8D8D8;
  background: #ffffff;
  @apply dark:bg-#222;
}

/** 底部浮动样式结束 */
</style>
