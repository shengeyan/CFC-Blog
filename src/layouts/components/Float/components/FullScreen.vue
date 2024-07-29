<template>
  <!-- 全屏 -->
  <el-tooltip placement="left" :content="globalStore.isFullScreen === false ? '全屏' : '关闭全屏'">
    <div
      class="mt-6px bg-[--el-color-primary-light-2] rounded-8px border-2px border-solid border-[--el-color-primary] w-36px h-36px flex justify-center items-center"
      @click="toggle"
    >
      <el-icon><FullScreen :size="20" v-if="!globalStore.isFullScreen" /><CloseBold :size="20" v-else /></el-icon>
    </div>
  </el-tooltip>
</template>

<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";
import { watch } from "vue";
import useGlobalStore from "@/stores/modules/global.ts";

const globalStore = useGlobalStore();
// @vueuse/core 处理是否全屏
const { isFullscreen, toggle } = useFullscreen();
watch(isFullscreen, () => {
  if (isFullscreen.value) {
    globalStore.setGlobalState("isFullScreen", true);
  } else {
    globalStore.setGlobalState("isFullScreen", false);
  }
});
</script>

<style lang="scss" scoped></style>
