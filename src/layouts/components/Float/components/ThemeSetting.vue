<template>
  <!-- 主题 -->
  <el-tooltip placement="left" content="主题">
    <div
      class="mt-6px bg-[--el-color-primary-light-2] rounded-8px border-2px border-solid border-[--el-color-primary] w-36px h-36px flex justify-center items-center"
      @click="handleThemeDialog"
    >
      <el-icon :size="20"><MostlyCloudy /></el-icon>
    </div>
  </el-tooltip>
</template>

<script setup lang="ts">
import mittBus from "@/utils/mittBus.ts";
// 打开主题配置
const handleThemeDialog = () => {
  mittBus.emit("handleThemeConfig");
};
</script>

<style lang="scss" scoped></style>
