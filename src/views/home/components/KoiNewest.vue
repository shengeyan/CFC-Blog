<template>
  <!-- 最近更新 -->
  <div
    class="h-526px m-t-8px shadow-sm rounded-18px border-2px border-dashed border-[--el-color-primary-light-3] hover:border-[--el-color-primary] bg-[rgb(241,243,249)] dark:bg-#1A1A1A p-6px"
  >
    <div class="flex items-center">
      <div
        class="m-t-2px m-b-4px flex items-center justify-center text-16px text-[--el-color-primary] max-w-150px rounded-8px border-2px border-dashed border-[--el-color-primary-light-2] hover:border-[--el-color-primary] hover:bg-[--el-color-primary-light-7] bg-[--el-color-primary-light-8] backdrop-blur-3xl p-l-14px p-r-18px p-y-2px"
      >
        <SvgIcon name="koi-menu-hot" width="22px" height="22px" class="p-b-3px m-r-5px outline-none"></SvgIcon>
        <div class="font-bold tracking-2px line-clamp-1">最近更新</div>
      </div>
    </div>
    <div
      class="border-2px border-solid rounded-10px border-[--el-color-primary-light-6] hover:border-[--el-color-primary] p-x-4px p-t-4px flex m-t-2px"
      v-for="item in newestList"
      :key="item.articleId"
      @click="handleArticleContent(item.articleId)"
    >
      <div class="relative">
        <el-image :src="item.picture" fit="cover" class="w-100px h-66px rounded">
          <template #error>
            <el-image
              src="http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202403/d74e3b0466b6ed7316d8bdd69b813f75--4196040656.jpg"
              fit="cover"
              class="w-100px h-66px rounded"
            ></el-image>
          </template>
        </el-image>
        <div class="absolute left-0 top-0">
          <div class="text-#FAFAFA text-8px whitespace-nowrap bg-[rgba(0,0,0,0.3)] p-x-6px p-y-4px rounded-4px">
            {{ item.typeName }}
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center m-l-10px">
        <div
          class="text-14px m-b-4px line-clamp-2 font-bold dark:text-#D8D8D8 text-#5A5A5A hover:text-[--el-color-primary] bottom-line h-36px"
        >
          {{ item.remark }}
        </div>
        <div class="text-12px dark:text-#D8D8D8 text-#6E6E6E">{{ item.createTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { listNewest } from "@/api/blog/article/index.ts";
import { koiNoticeError } from "@/utils/koi.ts";
import { useRouter } from "vue-router";

const router = useRouter();

const newestList = ref();

/** 文章数据查询 */
const handleList = async () => {
  try {
    // 重置数据
    newestList.value = []; 
    const res: any = await listNewest();
    newestList.value = res.data;
  } catch (error) {
    console.log(error);
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

onMounted(() => {
  handleList();
});

/** 跳转文章内容 */
const handleArticleContent = (articleId: any) => {
  router.push("/article/content/" + articleId);
};
</script>

<style scoped>
/** 底部线条 */
.bottom-line {
  /* 初始状态，背景渐变大小设置为0，因此不显示 */
  background: linear-gradient(90deg, var(--el-color-primary), var(--el-color-danger)) no-repeat left bottom;
  background-size: 0 3px;
  /* 添加过渡效果，使得背景渐变大小的改变具有动画效果 */
  transition: background-size 0.8s;
}

.bottom-line:hover {
  /* 鼠标悬停时，改变背景渐变的大小，从0扩展到100%的宽度 */
  background-size: 100% 3px;
}
</style>
