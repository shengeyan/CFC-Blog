<template>
  <el-container class="layout-container">
    <el-header class="layout-header flex items-center flex-justify-between">
      <div class="w-30px flex items-center">
        <SvgIcon name="koi-mobile-menu" width="30px" height="30px" @click="mobileDrawer = true"></SvgIcon>
      </div>
      <div>
        <!-- LOGO AND 标题 -->
        <a href="https://gitee.com/BigCatHome/Koi-Admin">
          <el-image class="w-144px h-36px" :src="logo">
            <template #error>
              <el-image
                class="w-36px h-36px user-avatar"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></el-image>
            </template>
          </el-image>
        </a>
      </div>
      <div class="flex items-center">
        <!-- 明亮/暗黑模式图标 -->
        <Dark></Dark>
      </div>
    </el-header>
    <el-container class="layout-main">
      <Main></Main>
    </el-container>
  </el-container>

  <!-- 左侧抽屉菜单 -->
  <MobileDrawer style="width: 220px" v-model="mobileDrawer" placement="left" class="dark:bg-#37383A">
    <div class="transition-all">
      <el-scrollbar class="layout-scrollbar">
        <div class="flex justify-center m-y-10px">
          <!-- LOGO AND 标题 -->
          <a href="https://gitee.com/BigCatHome/Koi-Admin">
            <el-image class="w-144px h-36px" :src="logo">
              <template #error>
                <el-image
                  class="w-36px h-36px user-avatar"
                  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                ></el-image>
              </template>
            </el-image>
          </a>
        </div>
        <!-- 菜单 -->
        <div class="rounded-12px m-5px dark:bg-#222 p-6px bg-[rgba(0,0,0,0.03)]">
          <div class="m-y-5px" v-for="item in menuList" :key="item.path">
            <!-- 一级菜单 -->
            <div
              class="text-14px p-x-6px p-y-3px rounded line-clamp-1 flex items-center text-left text-#222 dark:text-#E5EEF7"
              v-if="item.meta?.isHide == '1'"
              @click="handleMenuRouter(item)"
              :style="{ 'color': item.path == route.path ? 'var(--el-color-primary)' : '' }"
            >
              <div class="circle"></div>
              <SvgIcon
                :name="item?.meta.icon"
                width="15px"
                height="15px"
                class="m-b-1px m-r-2px"
                v-if="item.meta.icon && item.meta.icon.indexOf(SVG_PREFIX) == 0"
              ></SvgIcon>
              <el-icon v-if="item.meta.icon && item.meta.icon.indexOf(SVG_PREFIX) == -1" class="m-b-1px">
                <component :is="item.meta.icon"></component>
              </el-icon>
              <div>{{ item.meta.title }}</div>
            </div>
            <!-- 二级菜单 -->
            <div class="m-t-6px flex flex-wrap" v-if="item?.children">
              <div
                class="text-13px p-6px rounded-6px line-clamp-1 bg-[rgba(0,0,0,0.06)] backdrop-blur-2xl text-#222 dark:text-#FFF m-2px flex justify-center"
                v-for="child in item?.children"
                :key="child.path + new Date().getTime()"
                @click="handleMenuRouter(child)"
                v-if="item.meta?.isHide == '1'"
                :style="{ 'background': child.path == route.path ? 'var(--el-color-primary)' : '', 'color': child.path == route.path ? '#FFF' : '' }"
              >
                <SvgIcon
                  width="15px"
                  height="15px"
                  :name="child?.meta.icon"
                  class="m-b-1px m-r-2px"
                  v-if="child.meta.icon && child.meta.icon.indexOf(SVG_PREFIX) == 0"
                ></SvgIcon>
                <el-icon v-if="child.meta.icon && child.meta.icon.indexOf(SVG_PREFIX) == -1" class="m-b-1px m-r-2px">
                  <component :is="child.meta.icon"></component>
                </el-icon>
                <div>{{ child?.meta.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </MobileDrawer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Dark from "@/layouts/components/Header/components/Dark.vue";
import Main from "@/layouts/components/Main/index.vue";
import { useRoute, useRouter } from "vue-router";
import useAuthStore from "@/stores/modules/auth.ts";
import { getAssets } from "@/utils/index.ts";
import { SVG_PREFIX } from "@/config/index.ts";

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const menuList = computed(() => authStore.showMenuList);
const mobileDrawer = ref(false);

const logo = ref(`${getAssets("images/logo/logo.webp")}`);

/* 打开外部标签页 */
const handleMenuRouter = (value: any) => {
  if (value.meta?.isLink) return window.open(value.meta.isLink, "_blank");
  router.push(value.path);
};
</script>

<style lang="scss" scoped>
// 去除菜单右侧边框
.el-menu {
  border-right: none;
}
.layout-container {
  width: 100vw;
  height: 100vh;
  .layout-header {
    height: $aside-header-height;
    overflow: hidden;
    background-color: var(--el-header-bg-color);
  }
  .layout-main {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow-x: hidden;
    background-color: var(--el-bg-color);
  }
}
.layout-scrollbar {
  width: 100%;
  height: calc(100vh - $aside-header-height);
}

.circle {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border: 0.1em solid var(--el-color-primary);
  border-radius: 1em;
  margin: 0 0.5em;
  vertical-align: 0.1em;
  display: inline-block;
}
</style>
