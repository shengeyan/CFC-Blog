<template>
  <div>
    <!-- 头部 -->
    <KoiHeader></KoiHeader>
    <!-- 主页面 Main  -->
    <div class="max-w-1600px m-y-0 m-auto p-t-66px p-b-46px">
      <KoiMain></KoiMain>
    </div>

    <!-- 尾部 Tail -->
    <KoiTail class="<2xl:opacity-0"></KoiTail>

    <!-- 漂浮 Float -->
    <KoiFloat class="<2xl:opacity-0"></KoiFloat>
    <!-- 回到顶部 Top -->
    <el-backtop :right="13" :bottom="50" />
  </div>
</template>

<script setup lang="ts">
import KoiHeader from "@/layouts/components/Header/index.vue";
import KoiMain from "@/layouts/components/Main/index.vue";
import KoiTail from "@/layouts/components/Tail/index.vue";
import KoiFloat from "@/layouts/components/Float/index.vue";
</script>

<style lang="scss" scoped></style>
