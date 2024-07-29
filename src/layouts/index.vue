<!-- 这里是一次性加载 LayoutComponents -->
<template>
  <div>
    <KoiLoading v-if="loading"></KoiLoading>
  </div>
  <div v-if="!loading">
    <!-- 同级进行选择不同布局时就不会被关闭 -->
    <ThemeConfig></ThemeConfig>
    <component :is="LayoutComponent[layout]" v-if="!isMobile && !isIPad" />
    <component :is="LayoutIPad" v-if="isIPad" />
    <component :is="LayoutMobile" v-if="isMobile" />
  </div>
</template>

<script setup lang="ts" name="layout">
import { useScreenStore } from "@/hooks/screen/index.ts";
import { ref, onMounted, computed, type Component } from "vue";
// 全局主题配置
import useGlobalStore from "@/stores/modules/global.ts";
import ThemeConfig from "@/layouts/components/ThemeConfig/index.vue";
import LayoutBlog from "@/layouts/LayoutBlog/index.vue";
import LayoutIPad from "@/layouts/LayoutIPad/index.vue";
import LayoutMobile from "@/layouts/LayoutMobile/index.vue";
import KoiLoading from "@/views/loading/index.vue";

type LayoutType =  string;
const LayoutComponent: Record<LayoutType, Component> = {
  blog: LayoutBlog
};

// 全局主题仓库
const globalStore = useGlobalStore();
// 获取布局格式
const layout = computed(() => globalStore.layout);
// 获取当前为[移动端、IPad、PC端]仓库，阔以使用 watchEffect(() => {}) 进行监听。
const { isMobile, isIPad } = useScreenStore();

/** 自定义Loading加载 */
onMounted(() => {
  // 取消加载
  cancelLoading();
})
const loading = ref(true);
const cancelLoading = () => {
  setTimeout(() => {
    loading.value = false
  }, 1500)
}
</script>

<style scoped lang="scss"></style>
