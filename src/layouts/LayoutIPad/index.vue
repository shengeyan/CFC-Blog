<template>
  <div>
    <!-- 头部 -->
    <KoiIPadHeader></KoiIPadHeader>
    <!-- 主页面 Main  -->
    <div class="max-w-1600px m-y-0 m-auto p-t-66px p-b-46px">
      <KoiMain></KoiMain>
    </div>
    <!-- 回到顶部 Top -->
    <el-backtop :right="13" :bottom="50" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// @ts-ignore
import KoiIPadHeader from "../components/Header/components/IPadHeader.vue";
import KoiMain from "@/layouts/components/Main/index.vue";

// 轮动改变头部颜色
const headerBackground = ref("linear-gradient(0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0.1) 80%)");
window.onscroll = function () {
  if (window.scrollY <= 0 || document.documentElement.scrollTop <= 0) {
    // 如果滚动回到了顶部，0代表0px
    // 恢复原始背景颜色
    headerBackground.value = "linear-gradient(0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0.1) 80%)";
  } else {
    headerBackground.value = "blur(10px)";
  }
};

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
