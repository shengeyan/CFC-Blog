<template>
  <div class="relative">
    <el-tooltip placement="left" content="更多菜单">
      <!-- 搜索文章 -->
      <SvgIcon
        name="koi-menu-more"
        width="24px"
        height="24px"
        class="m-l-8px p-5px outline-none bg-[rgba(50,50,50,0.06)] rounded-full"
        @click="handleShowMenu"
      ></SvgIcon>
    </el-tooltip>
    <!-- 导航列表开始 -->
    <div class="fixed right-40px rounded-20px border-dashed border-dashed border-2px border-[--el-color-primary]" v-if="isShow">
      <div class="bg-#FAFAFA rounded-20px dark:bg-#3C3C3C shadow-md h-56px">
        <KoiNavigation :menuList="menuList"></KoiNavigation>
      </div>
    </div>
    <!-- 导航列表结束 -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import useAuthStore from "@/stores/modules/auth.ts";

const authStore = useAuthStore();
const menuList = computed(() => authStore.showMenuList);

const isShow = ref(false);

// 出现菜单
const handleShowMenu = () => {
  isShow.value = !isShow.value;
};
</script>

<style scoped></style>
