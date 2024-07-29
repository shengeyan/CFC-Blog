<template>
  <!-- 头部 header 开始 #141414 #37383A -->
  <header class="w-100% fixed z-999 top-0 left-0 select-none dark:bg-[rgba(50,51,53,0.8)] header">
    <!-- 头部内置box开始 bg-#F6F9F -->
    <div class="max-w-1600px h-50px m-y-0 m-x-auto p-x-15px p-y-8px">
      <!-- Logo开始 -->
      <KoiLogo></KoiLogo>
      <!-- Logo结束 -->
      <!-- 导航列表开始 -->
      <div class="relative float-left">
        <KoiNavigation :menuList="menuList"></KoiNavigation>
      </div>
      <!-- 导航列表结束 -->
      <!-- 登录开始 -->
      <!-- 用户头像 -->
      <div class="relative float-right p-r-35px p-t-8px">
        <div class="flex flex-items-center">
          <!-- 个人信息 -->
          <KoiMine></KoiMine>
          <!-- 搜索文章 -->
          <KoiGlobalSearch></KoiGlobalSearch>
          <span class="c-[rgba(50,50,50,0.5)] m-t-2px m-x-10px dark:c-#8D8D8D"> | </span>
          <!-- 明亮/暗黑模式 -->
          <KoiDark></KoiDark>
          <!-- 发布文章 -->
          <KoiPublish></KoiPublish>
        </div>
      </div>
      <!-- 登录结束 -->
    </div>
    <!-- 头部内置box结束  -->
  </header>
  <!-- 头部 header 结束 -->
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import KoiLogo from "./components/Logo.vue";
import KoiDark from "./components/Dark.vue";
import KoiPublish from "./components/Publish.vue";
import KoiGlobalSearch from "./components/GlobalSearch.vue";
import KoiMine from "./components/Mine.vue";
import useAuthStore from "@/stores/modules/auth.ts";

const authStore = useAuthStore();
const menuList = computed(() => authStore.showMenuList);

const headerBackground = ref("linear-gradient(0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0.1) 80%)");
window.addEventListener('scroll', () => {
  if (window.scrollY <= 0 || document.documentElement.scrollTop <= 0) {
    // 如果滚动回到了顶部，0代表0px
    // 恢复原始背景颜色
    headerBackground.value = "linear-gradient(0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0.1) 80%)";
  } else {
    headerBackground.value = "blur(10px)";
  }
});
</script>

<style lang="scss" scoped>
/** 头部样式 */
.header {
  background: v-bind(headerBackground);
  backdrop-filter: v-bind(headerBackground);
}
</style>
