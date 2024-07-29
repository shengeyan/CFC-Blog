<template>
  <div class="fixed right-1.5vh bottom-12vh z-100 text-16px flex flex-col text-white dark:text-#D8D8D8 select-none">
    <div v-if="toolButton" :class="{ 'animate__animated animate__fadeInRight': toolButton }">
      <!-- 锁屏 -->
      <LockScreen></LockScreen>
      <!-- 主题 -->
      <ThemeSetting></ThemeSetting>
      <!-- 全屏 -->
      <FullScreen></FullScreen>
    </div>

    <!-- 设置 -->
    <el-tooltip placement="left" content="设置">
      <div
        class="mt-6px bg-[--el-color-primary-light-2] rounded-8px border-2px border-solid border-[--el-color-primary] text-center w-36px h-36px flex justify-center items-center"
        @click="handleToolButton"
      >
        <el-icon class="rotate-box" :size="20"><Tools /></el-icon>
      </div>
    </el-tooltip>
    <!-- 通知 -->
    <Notice></Notice>
    <!-- 百分比 -->
    <el-tooltip placement="left" content="进度条">
      <div
        class="m-t-6px bg-[--el-color-primary-light-2] rounded-8px border-2px border-solid border-[--el-color-primary] text-center leading-36px w-36px h-36px overflow-hidden"
      >
        {{ scrollStore.scrollPercentage + "%" }}
      </div>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScrollPercentage } from "@/utils/scroll.ts";
useScrollPercentage();
import useScrollStore from "@/stores/modules/scroll.ts";
import Notice from "../Float/components/Notice.vue";
import FullScreen from "../Float/components/FullScreen.vue";
import ThemeSetting from "../Float/components/ThemeSetting.vue";
import LockScreen from "../Float/components/LockScreen.vue";

// 获取百分比滚动
const scrollStore = useScrollStore();

const toolButton = ref(false);

const handleToolButton = () => {
  toolButton.value = !toolButton.value;
};
</script>

<style scoped></style>
