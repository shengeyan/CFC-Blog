<template>
  <router-view v-slot="{ Component, route }">
    <!-- <transition :name="transition" mode="out-in" > -->
      <keep-alive :max="16" :include="keepAliveName">
        <component :is="Component" :key="route.fullPath" v-if="isRouterShow" />
      </keep-alive>
    <!-- </transition> -->
  </router-view>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { storeToRefs } from "pinia";
import useKeepAliveStore from "@/stores/modules/keepAlive.ts";
import useGlobalStore from "@/stores/modules/global.ts";

const globalStore = useGlobalStore();
// @ts-ignore 路由动画
const { transition } = storeToRefs(globalStore);

const keepAliveStore = useKeepAliveStore();
const { keepAliveName } = storeToRefs(keepAliveStore);

// 刷新当前路由页面缓存方法
const isRouterShow = ref(true);
const refreshCurrentPage = (val: boolean) => (isRouterShow.value = val);
provide("refresh", refreshCurrentPage);
</script>

<style lang="scss" scoped>
@import "../../../styles/transition.scss";
</style>
