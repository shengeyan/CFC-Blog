<template>
  <div class="m-l-38px flex flex-wrap">
    <div
      v-for="item in typeList"
      :key="item.typeId"
      class="shadow-md w-220px h-250px m-r-10px m-t-10px rounded-20px border-2px border-dashed border-[--el-color-primary-light-3] hover:border-[--el-color-primary] text-16px text-[--el-color-primary] bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] p-10px"
    >
      <div class="flex items-center">
        <!-- 分类名称 -->
        <div
          class="text-17px text-[--el-color-primary] max-w-180px rounded-8px border-2px border-dashed border-[--el-color-primary-light-2] hover:border-[--el-color-primary] hover:bg-[--el-color-primary-light-7] bg-[--el-color-primary-light-8] backdrop-blur-3xl p-x-16px p-y-2px font-bold tracking-2px line-clamp-1"
        >
          {{ item.typeName }}
        </div>
      </div>
      <!-- 描述标题 -->
      <div class="m-t-10px text-18px border-b-solid border-b-2px rounded-2px w-52px tracking-3px">描述:</div>
      <!-- 描述信息 -->
      <div class="m-t-10px text-15px w-100% tracking-1px line-clamp-6 h-116px text-#5A5A5A dark:text-#D8D8D8">
        {{ item.remark }}
      </div>
      <!-- 文章数量 -->
      <div class="flex items-center m-t-8px">
        <div
          class="text-12px text-[--el-color-primary] max-w-180px rounded-8px border-2px border-dashed border-[--el-color-primary-light-2] hover:border-[--el-color-primary] hover:bg-[--el-color-primary-light-7] bg-[--el-color-primary-light-8] backdrop-blur-3xl p-x-8px p-y-2px font-bold tracking-2px line-clamp-1"
        >
          {{ item.articleNumber }}篇文章
        </div>
      </div>
      <!-- 创建时间 -->
      <div class="m-t-10px text-12px border-b-dashed border-b-1px w-100% tracking-1px line-clamp-1">
        创建于{{ item.createTime }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="categoryPage">
import { ref, onMounted } from "vue";
import { ElLoading } from "element-plus";
import { koiNoticeError } from "@/utils/koi.ts";
import { listTypeAll } from "@/api/blog/type/index.ts";

const typeList = ref();

/** 文章分类查询 */
const handleListType = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  try {
    // 重置数据
    typeList.value = [];
    const res: any = await listTypeAll();
    typeList.value = res.data;
    loading.close();
  } catch (error) {
    console.log(error);
    loading.close();
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

onMounted(() => {
  handleListType();
});
</script>

<style scoped></style>
