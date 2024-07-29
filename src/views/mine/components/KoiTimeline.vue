<template>
  <div class="koi-timeline select-none">
    <div v-for="(data, index) in timelineDataArray" :key="index" class="timeline-entry">
      <div class="timeline-title">
        <div class="line-height-normal">
          <div class="text-14px m-b-2px">{{ data.startDate }} ~ {{ data.endDate }}</div>
          <div class="text-16px font-bold text-[--el-color-primary] m-b-2px">{{ data.company }}</div>
          <div class="text-14px text-[--el-color-primary] font-bold chroma-text">{{ data.role }}</div>
          <div class="text-14px">{{ data.project }}</div>
        </div>
      </div>
      <div class="timeline-content">
        <div
          :class="[
            data.bgColor,
            'p-x-10px',
            'p-y-16px',
            'rounded-12px',
            'w-400px',
            'text-14px',
            'line-height-normal',
            'text-#303536',
            'dark:bg-[#3A3A3A]',
            'dark:text-#D8D8D8'
          ]"
        >
          <div class="m-b-5px font-bold">Crazy For Code Logs：</div>
          <div class="m-b-5px">{{ data.projectDescription }}</div>
          <div class="m-b-5px font-bold">Have a look：</div>
          <div class="m-b-5px" v-for="(contribution, idx) in data.contributions" :key="idx">
            <img :src="contribution" style="height: 300px; width: 400px" alt="内容展示" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO：修改为动态数据
// 目前采用静态数据

const timelineDataArray = [
  {
    startDate: "2014-01",
    endDate: "至今",
    company: "Crazy For Code 正式成立",
    role: "",
    project: "KOI-ADMIN项目开发",
    projectDescription: "❤️Crazy For Code 实验室正式成立！❤️",
    contributions: ["https://ooo.0o0.ooo/2016/09/07/57d028465bf5e.png"],
    bgColor: "bg-#76bbff"
  },
  {
    startDate: "2014-01",
    endDate: "至今",
    company: "Crazy For Code 正式成立",
    role: "",
    project: "KOI-ADMIN项目开发",
    projectDescription: "❤️Crazy For Code 实验室正式成立！❤️",
    contributions: ["https://s21.ax1x.com/2024/06/29/pk6zqHK.jpg"],
    bgColor: "bg-#9096ff"
  },
  {
    startDate: "2014-01",
    endDate: "至今",
    company: "Crazy For Code 正式成立",
    role: "",
    project: "KOI-ADMIN项目开发",
    projectDescription: "❤️Crazy For Code 实验室正式成立！❤️",
    contributions: ["https://ooo.0o0.ooo/2016/09/07/57d028465bf5e.png"],
    bgColor: "bg-#f89c50"
  }
];
</script>

<style scoped>
.koi-timeline {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.koi-timeline:before {
  content: "";
  position: absolute;
  top: 0px;
  left: 300px;
  bottom: 0px;
  width: 4px;
  height: 100%;
  background: #ddd;
}
.timeline-title {
  margin-bottom: 10px;
  width: 280px;
  padding-right: 30px;
  text-align: right;
  position: relative;
}
.timeline-title:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border: 4px solid var(--el-color-primary);
  background-color: #f7f7f7;
  border-radius: 100%;
  top: 6px;
  left: 294px;
  z-index: 99;
}
.timeline-entry {
  display: flex;
  margin-top: 16px;
}
.timeline-content {
  width: 500px;
  padding: 10px 18px;
}

/** 彩色字体 */
.chroma-text {
  background: linear-gradient(270deg, rgba(198, 141, 255, 0.9) 8.92%, #5685ff 46.17%, #48d6ff 92.17%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  color: transparent;
}
</style>
