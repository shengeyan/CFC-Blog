<template>
  <el-tooltip content="个人简介">
    <!-- 个人简介 -->
    <SvgIcon
      name="koi-menu-mine"
      width="20px"
      height="20px"
      class="p-5px m-r-8px outline-none bg-[rgba(50,50,50,0.06)] rounded-full"
      @click="handleToMine"
    ></SvgIcon>
  </el-tooltip>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

/** 通过path路径，跳转个人简历 */
const handleToMine = () => {
  router.push(`/mine`);
}
</script>

<style scoped></style>
