<template>
  <el-tooltip content="搜索文章">
    <!-- 搜索文章 -->
    <SvgIcon
      name="koi-menu-search"
      width="20px"
      height="20px"
      class="p-5px outline-none bg-[rgba(50,50,50,0.06)] rounded-full"
      @click="handleOpenDialog"
    ></SvgIcon>
  </el-tooltip>

  <KoiDialog ref="koiDialogRef" :title="title" :footerHidden="true" top="6vh" :width="562" :height="660">
    <template #content>
      <div class="flex justify-center">
        <!-- 搜索框 -->
        <div
          class="search-middle w-500px p-8px bg-[rgba(255,255,255,0.6)] rounded-10px shadow-sm border-2px border-solid border-[--el-color-primary-light-3] flex items-center"
        >
          <input
            type="text"
            placeholder="请输入文章标题"
            v-model="articleTitle"
            @keyup.enter.native="handleSearch"
            class="w-100% h-26px bg-transparent border-0 text-18px outline-0 font-bold text-[--el-color-primary]"
          />
          <el-icon :size="26" class="p-b-1px m-r-4px outline-none text-[--el-color-primary]" @click="handleSearch"
            ><Search
          /></el-icon>
        </div>
      </div>

      <!-- 搜索结果 -->
      <div class="flex justify-center m-b-26px">
        <div
          class="overflow-y-auto w-500px h-537px m-t-8px shadow-sm rounded-10px border-2px border-dashed border-[--el-color-primary-light-3] hover:border-[--el-color-primary] bg-[rgb(241,243,249)] dark:bg-#1A1A1A p-6px"
        >
          <div class="flex items-center">
            <div
              class="m-t-2px m-b-4px flex items-center justify-center text-16px text-[--el-color-primary] max-w-150px rounded-8px border-2px border-dashed border-[--el-color-primary-light-2] hover:border-[--el-color-primary] hover:bg-[--el-color-primary-light-7] bg-[--el-color-primary-light-8] backdrop-blur-3xl p-l-14px p-r-18px p-y-2px"
            >
              <SvgIcon name="koi-menu-search" width="22px" height="22px" class="p-b-3px m-r-5px outline-none"></SvgIcon>
              <div class="font-bold tracking-2px line-clamp-1">搜索结果</div>
            </div>
          </div>
          <div
            class="border-2px border-solid rounded-10px border-[--el-color-primary-light-6] hover:border-[--el-color-primary] p-x-4px p-t-4px flex m-t-5px"
            v-for="item in searchList"
            :key="item.articleId"
            v-if="searchList.length  > 0"
            @click="handleArticleContent(item.articleId)"
          >
            <div class="relative">
              <el-image :src="item.picture" fit="cover" class="w-100px h-66px rounded">
                <template #error>
                  <el-image
                    src="http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp…/08ebcae931494e226a5891f5eab88b34--2718519177.jpg"
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
                {{ item.articleTitle }}
              </div>
              <div class="text-12px dark:text-#D8D8D8 text-#6E6E6E">{{ item.createTime }}</div>
            </div>
          </div>
          <div class="flex justify-center" v-if="searchList.length == 0">
            <el-empty :image="noPicture" :image-size="360" description="主人，没有数据了哟👻"></el-empty>
          </div>
        </div>
      </div>

      <!-- 脚部 -->
      <div class="flex justify-center">
        <div class="text-15px text-#6E6E6E">基于 Elasticsearch  全文检索引擎开发</div>
      </div>
    </template>
  </KoiDialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElLoading } from "element-plus";
import { koiNoticeError } from "@/utils/koi.ts";
import { search } from "@/api/blog/article/index.ts";
import { getAssets } from "@/utils/index.ts";
import { useRouter } from "vue-router";

const router = useRouter();

const koiDialogRef = ref();
const title = ref("全局搜索");
const articleTitle = ref();

const searchList = ref<any>([]);
const noPicture = ref(`${getAssets("images/error/404.png")}`);

// 打开对话框
const handleOpenDialog = () => {
  koiDialogRef.value.koiOpen();
  articleTitle.value = "";
  searchList.value = [];
};

// 全局搜索
const handleSearch = async () => {
  /** 文章数据查询 */
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  try {
    // 重置数据
    searchList.value = [];
    const res: any = await search(articleTitle.value);
    searchList.value = res.data;
    loading.close();
  } catch (error) {
    console.log(error);
    loading.close();
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

/** 跳转文章内容 */
const handleArticleContent = (articleId: any) => {
  router.push("/article/content/" + articleId);
};
</script>

<style scoped>
/** 搜索框样式 */
.search-middle input::placeholder {
  font-size: 18px;
  font-weight: bold;
  @apply text-[--el-color-primary-light-3];
}
</style>
