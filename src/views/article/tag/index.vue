<template>
  <div class="m-l-36px mt-10px flex flex-wrap <sm:justify-center">
    <div
      v-for="item in tagList"
      :key="item.tagId"
      class="m-r-18px m-t-10px bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.4)] hover:bg-[--el-color-primary] rounded-8px border-2px border-dashed border-[--el-color-primary-light-4] min-w-136px h-36px flex justify-center items-center text-[--el-color-primary] hover:text-white dark:hover:text-#E5EAF3"
      @click="handleArticleTag(item.tagId)"   
    >
      <el-badge :value="item.articleNumber" type="primary">
        <div class="m-x-10px font-bold"># {{ item.tagName }}</div>
      </el-badge>
    </div>
  </div>
</template>

<script setup lang="ts" name="tagPage">
import { ref, onMounted } from "vue";
import { ElLoading } from "element-plus";
import { koiNoticeError } from "@/utils/koi.ts";
import { listTag } from "@/api/blog/tag/index.ts";
import { useRouter } from "vue-router";

const router = useRouter();

const tagList = ref();

/** 文章数据查询 */
const handleListTag = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  try {
    // 重置数据
    tagList.value = [];
    const res: any = await listTag();
    tagList.value = res.data;
    loading.close();
  } catch (error) {
    console.log(error);
    loading.close();
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

onMounted(() => {
  handleListTag();
});

/** 跳转标签文章 */
const handleArticleTag = (tagId: any) => {
  router.push("/article/articleTag/" + tagId);
};
</script>

<style scoped></style>
