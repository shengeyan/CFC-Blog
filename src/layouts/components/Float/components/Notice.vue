<template>
  <!-- 通知 -->
  <el-tooltip placement="left" content="通知">
    <div
      class="mt-6px bg-[--el-color-primary-light-2] rounded-8px border-2px border-solid border-[--el-color-primary] w-36px h-36px flex justify-center items-center"
      @click="handleOpenDialog"
    >
      <el-badge :value="noticeList.length" type="primary" class="p-t-6px" v-if="noticeList.length > 0">
        <el-icon :size="20"><BellFilled /></el-icon>
      </el-badge>
      <el-icon :size="20" v-if="noticeList.length == 0"><BellFilled /></el-icon>
    </div>
  </el-tooltip>
  <!-- 消息通知 -->
  <KoiDialog ref="koiDialogRef" title="消息通知" top="6vh" :width="562" :height="650" :footerHidden="true">
    <template #content>
      <!-- 搜索结果 -->
      <div class="flex justify-center m-b-26px">
        <div
          class="overflow-y-auto w-500px h-596px m-t-8px shadow-sm rounded-10px border-2px border-dashed border-[--el-color-primary-light-3] hover:border-[--el-color-primary] bg-[rgb(241,243,249)] dark:bg-#1A1A1A p-6px"
        >
          <div class="flex items-center justify-between">
            <div
              class="m-t-2px m-b-4px flex items-center justify-center text-16px text-[--el-color-primary] max-w-150px rounded-8px border-2px border-dashed border-[--el-color-primary-light-2] hover:border-[--el-color-primary] hover:bg-[--el-color-primary-light-7] bg-[--el-color-primary-light-8] backdrop-blur-3xl p-l-14px p-r-18px p-y-2px"
            >
              <el-icon :size="18"><BellFilled /></el-icon>
              <div class="font-bold tracking-2px line-clamp-1 m-l-2px">消息通知</div>
            </div>
            <el-tag size="small">全部已读</el-tag>
          </div>
          <div
            class="border-2px border-solid rounded-10px border-[--el-color-primary-light-6] hover:border-[--el-color-primary] p-x-4px p-t-4px flex m-t-5px"
            v-for="item in noticeList"
            :key="item.noticeId"
          >
            <div class="flex flex-col justify-center m-l-10px">
              <div
                class="text-14px m-b-4px line-clamp-2 dark:text-#D8D8D8 text-#5A5A5A hover:text-[--el-color-primary] bottom-line h-36px"
              >
                {{ item.noticeContent }}
              </div>
              <div class="text-12px dark:text-#D8D8D8 text-#6E6E6E m-b-2px">{{ item.createTime }}</div>
            </div>

            <div>
              <el-tag size="small" type="success">已读</el-tag>
            </div>
          </div>
          <div class="flex justify-center" v-if="noticeList.length == 0">
            <el-empty :image="noPicture" :image-size="300" description="主人，没有数据了哟👻"></el-empty>
          </div>
        </div>
      </div>
    </template>
  </KoiDialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { koiNoticeError } from "@/utils/koi.ts";
import { getAssets } from "@/utils/index.ts";
import { list } from "@/api/blog/notice/index.ts";

const koiDialogRef = ref();
const noticeList = ref<any>([]);

const noPicture = ref(`${getAssets("images/error/404.png")}`);

// 打开对话框
const handleOpenDialog = () => {
  koiDialogRef.value.koiOpen();
  handleList();
};

/** 友链数据查询 */
const handleList = async () => {
  try {
    // 重置数据
    noticeList.value = [];
    const res: any = await list();
    noticeList.value = res.data;
  } catch (error) {
    console.log(error);
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

onMounted(() => {
  handleList();
});
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
