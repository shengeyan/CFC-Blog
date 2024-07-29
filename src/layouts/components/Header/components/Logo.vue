<template>
  <!-- LOGO -->
  <div class="float-left p-x-30px p-t-6px">
    <el-tooltip content="Crazy For Code" placement="bottom">
      <a href="https://www.crazyforcode.org/" target="_blank">
        <el-image class="w-144px h-36px" :src="logo">
          <template #error>
            <el-image
              class="w-36px h-36px user-avatar"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-image>
          </template>
        </el-image>
      </a>
    </el-tooltip>
  </div>
  <!-- LOGO AND 标题 -->
  <!-- <div class="float-left p-x-30px flex flex-items-center p-t-7px">
    <el-image class="w-36px h-36px rounded-full user-avatar" :src="myLogo">
      <template #error>
        <el-image
          class="w-36px h-36px user-avatar"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-image>
      </template>
    </el-image>
    <div class="text-xl font-bold m-l-10px text-#666 dark:text-white">KOI-WLOG</div>
  </div> -->
  <!-- Logo结束 -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAssets } from "@/utils/index";

// const logo = ref(`${getAssets("images/logo/logo.webp")}`);
const logo = ref(`${getAssets("images/logo/CFC.png")}`);

// const myLogo = ref("https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg");
</script>

<style scoped></style>
