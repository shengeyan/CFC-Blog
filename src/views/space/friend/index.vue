<!-- 友情链接页 -->
<template>
  <!-- 友链列表 -->
  <div class="sm:m-l-36px">
    <!-- 友链标签 -->
    <div class="flex items-center <sm:justify-center">
      <div
        class="m-t-10px flex items-center justify-center text-16px text-[--el-color-primary] max-w-120px rounded-8px border-2px border-dashed border-[--el-color-primary-light-2] hover:border-[--el-color-primary] hover:bg-[--el-color-primary-light-7] line-clamp-1 bg-[--el-color-primary-light-8] line-clamp-1 backdrop-blur-3xl p-l-14px p-r-18px p-y-2px"
      >
        <SvgIcon name="koi-menu-hot" width="22px" height="22px" class="p-b-3px m-r-5px outline-none"></SvgIcon>
        <div class="font-bold tracking-2px">友情链接</div>
      </div>
    </div>
    <!-- 友链卡片 -->
    <div class="m-t-10px w-100% flex flex-row flex-wrap <sm:justify-center">
      <div
        class="m-0 p-0 relative m-r-15px"
        v-for="item in friendList.friendLinkList"
        :key="item.friendId"
        @click.prevent="handleWebSite(item.website)"
      >
        <!-- 博客图片 -->
        <el-image
          :src="item.picture"
          fit="cover"
          :lazy="true"
          class="w-286px h-166px border-solid border-2px border-[--el-color-primary-light-6] rounded-8px bg-transparent relative"
        >
          <template #error>
            <el-image
              src="https://ichika.cc/img/Page/404.jpg"
              fit="cover"
              class="w-286px h-166px rounded-8px bg-transparent relative"
            ></el-image>
          </template>
        </el-image>
        <!-- 博客介绍 -->
        <div
          class="animation-overlay select-none flex flex-col items-center w-286px h-166px bg-[rgba(255,255,255,0.1)] border-solid border-2px border-[--el-color-primary-light-6] rounded-8px absolute left-0 top-0"
        >
          <el-image
            :src="item.avatar"
            fit="cover"
            :lazy="true"
            class="w-80px h-80px rounded-full border-solid border-2px border-[--el-color-primary-light-6] rounded-8px bg-transparent absolute top-6px"
          >
            <template #error>
              <el-image
                src="https://pic4.zhimg.com/v2-702a23ebb518199355099df77a3cfe07_b.webp"
                fit="cover"
                class="w-80px h-80px rounded-full"
              ></el-image>
            </template>
          </el-image>
          <div
            class="w-100% text-center bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.4)] h-70% m-t-60px overflow-hidden rounded-b-8px p-t-36px"
          >
            <div class="text-#4c4948 dark:text-#FAFAFA text-18px m-b-12px">{{ item.blogName }}</div>
            <div class="text-#666 dark:text-#FAFAFA text-14px line-clamp-1">{{ item.remark }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 无数据展示 -->
    <div class="flex justify-center" v-if="!friendList.friendLinkList">
      <el-empty :image="noPicture" :image-size="300" description="主人，没有数据了哟👻"></el-empty>
    </div>
  </div>

  <!-- 娱乐推荐 -->
  <div class="sm:m-l-36px">
    <!-- 友链标签 -->
    <div class="flex items-center <sm:justify-center">
      <div
        class="m-t-10px flex items-center justify-center text-16px text-[--el-color-primary] max-w-120px rounded-8px border-2px border-dashed border-[--el-color-primary-light-2] hover:border-[--el-color-primary] hover:bg-[--el-color-primary-light-7] line-clamp-1 bg-[--el-color-primary-light-8] line-clamp-1 backdrop-blur-3xl p-l-14px p-r-18px p-y-2px"
      >
        <SvgIcon name="koi-menu-rocket" width="22px" height="22px" class="p-b-3px m-r-5px outline-none"></SvgIcon>
        <div class="font-bold tracking-2px">娱乐推荐</div>
      </div>
    </div>
    <!-- 友链卡片 -->
    <div class="m-t-10px w-100% flex flex-row flex-wrap <sm:justify-center">
      <div
        class="m-0 p-0 relative m-r-15px"
        v-for="item in friendList.recreationList"
        :key="item.friendId"
        v-if="friendList.recreationList"
        @click.prevent="handleWebSite(item.website)"
      >
        <!-- 博客图片 -->
        <el-image
          :src="item.picture"
          fit="cover"
          :lazy="true"
          class="w-286px h-166px border-solid border-2px border-[--el-color-primary-light-6] rounded-8px bg-transparent relative"
        >
          <template #error>
            <el-image
              src="https://ichika.cc/img/Page/404.jpg"
              fit="cover"
              class="w-286px h-166px rounded-8px bg-transparent relative"
            ></el-image>
          </template>
        </el-image>
        <!-- 博客介绍 -->
        <div
          class="animation-overlay select-none flex flex-col items-center w-286px h-166px bg-[rgba(255,255,255,0.1)] border-solid border-2px border-[--el-color-primary-light-6] rounded-8px absolute left-0 top-0"
        >
          <el-image
            :src="item.avatar"
            fit="cover"
            :lazy="true"
            class="w-80px h-80px rounded-full border-solid border-2px border-[--el-color-primary-light-6] rounded-8px bg-transparent absolute top-6px"
          >
            <template #error>
              <el-image src="https://ichika.cc/img/Page/404.jpg" fit="cover" class="w-80px h-80px rounded-full"></el-image>
            </template>
          </el-image>
          <div
            class="w-100% text-center bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.4)] h-70% m-t-60px overflow-hidden rounded-b-8px p-t-36px"
          >
            <div class="text-#4c4948 dark:text-#FAFAFA text-18px m-b-12px">{{ item.blogName }}</div>
            <div class="text-#666 dark:text-#FAFAFA text-14px line-clamp-1">{{ item.remark }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center" v-if="!friendList.recreationList">
      <el-empty :image="noPicture" :image-size="300" description="主人，没有数据了哟👻"></el-empty>
    </div>
  </div>

  <!-- 工具推荐 -->
  <div class="sm:m-l-36px">
    <!-- 友链标签 -->
    <div class="flex items-center <sm:justify-center">
      <div
        class="m-t-10px flex items-center justify-center text-16px text-[--el-color-primary] max-w-120px rounded-8px border-2px border-dashed border-[--el-color-primary-light-2] hover:border-[--el-color-primary] hover:bg-[--el-color-primary-light-7] line-clamp-1 bg-[--el-color-primary-light-8] line-clamp-1 backdrop-blur-3xl p-l-14px p-r-18px p-y-2px"
      >
        <SvgIcon name="koi-menu-sun" width="22px" height="22px" class="p-b-3px m-r-5px outline-none"></SvgIcon>
        <div class="font-bold tracking-2px">工具推荐</div>
      </div>
    </div>
    <!-- 友链卡片 -->
    <div class="m-t-10px w-100% flex flex-row flex-wrap <sm:justify-center">
      <div
        class="m-0 p-0 relative m-r-15px"
        v-for="item in friendList.toolList"
        :key="item.friendId"
        v-if="friendList.toolList"
        @click.prevent="handleWebSite(item.website)"
      >
        <!-- 博客图片 -->
        <el-image
          :src="item.picture"
          fit="cover"
          :lazy="true"
          class="w-286px h-166px border-solid border-2px border-[--el-color-primary-light-6] rounded-8px bg-transparent relative"
        >
          <template #error>
            <el-image
              src="https://pic4.zhimg.com/v2-702a23ebb518199355099df77a3cfe07_b.webp"
              fit="cover"
              class="w-286px h-166px border-solid border-2px border-[--el-color-primary-light-6] rounded-8px bg-transparent relative"
            ></el-image>
          </template>
        </el-image>
        <!-- 博客介绍 -->
        <div
          class="animation-overlay select-none flex flex-col items-center w-286px h-166px bg-[rgba(255,255,255,0.1)] border-solid border-2px border-[--el-color-primary-light-6] rounded-8px absolute left-0 top-0"
        >
          <el-image
            :src="item.avatar"
            fit="cover"
            :lazy="true"
            class="w-80px h-80px rounded-full border-solid border-2px border-[--el-color-primary-light-6] rounded-8px bg-transparent absolute top-6px"
          >
            <template #error>
              <el-image
                src="https://pic4.zhimg.com/v2-702a23ebb518199355099df77a3cfe07_b.webp"
                fit="cover"
                class="w-80px h-80px rounded-full"
              ></el-image>
            </template>
          </el-image>
          <div
            class="w-100% text-center bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.4)] h-70% m-t-60px overflow-hidden rounded-b-8px p-t-36px"
          >
            <div class="text-#4c4948 dark:text-#FAFAFA text-18px m-b-12px">{{ item.blogName }}</div>
            <div class="text-#666 dark:text-#FAFAFA text-14px line-clamp-1">{{ item.remark }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center" v-if="!friendList.toolList">
      <el-empty :image="noPicture" :image-size="300" description="主人，没有数据了哟👻"></el-empty>
    </div>
  </div>
</template>

<script setup lang="ts" name="friendPage">
import { ref, onMounted } from "vue";
import { ElLoading } from "element-plus";
import { koiNoticeError } from "@/utils/koi";
import { getAssets } from "@/utils/index";
import { list } from "@/api/blog/friend/index";

const noPicture = ref(`${getAssets("images/error/404.png")}`);

/** 友链数据列表 */
const friendList = ref<any>({
  friendLinkList: [],
  recreationList: [],
  toolList: []
});

// 测试数据
// const friendList = ref<any>({
//   recreationList: [
//     {
//       friendId: 2,
//       blogName: "于长生博客",
//       friendName: null,
//       friendType: "2",
//       website: "https://gitee.com/BigCatHome/koi-ui",
//       avatar: "https://foruda.gitee.com/avatar/1710744828463301493/5734968_bigcathome_1710744828.png!avatar200",
//       picture: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202209/35ccaac592beb60cbc7a5ee73c8cf7b4--749489983.jpg",
//       friendStatus: null,
//       sorted: null,
//       remark: "遇事不决,可问春风.春风不语,即随本心.",
//       createTime: null,
//       createBy: null,
//       updateTime: null,
//       updateBy: null
//     }
//   ],
//   toolList: [
//     {
//       friendId: 3,
//       blogName: "KOI-UI",
//       friendName: null,
//       friendType: "3",
//       website: "https://gitee.com/BigCatHome/koi-ui",
//       avatar: "https://foruda.gitee.com/avatar/1710744828463301493/5734968_bigcathome_1710744828.png!avatar200",
//       picture: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202209/6a42e1f7a30361320f94b3843edb60e4--1324897663.jpg",
//       friendStatus: null,
//       sorted: null,
//       remark: "遇事不决,可问春风.春风不语,即随本心.",
//       createTime: null,
//       createBy: null,
//       updateTime: null,
//       updateBy: null
//     }
//   ],
//   friendLinkList: [
//     {
//       friendId: 5,
//       blogName: "于小鱼博客",
//       friendName: null,
//       friendType: "1",
//       website: "https://gitee.com/BigCatHome/koi-ui",
//       avatar: "https://pic4.zhimg.com/v2-702a23ebb518199355099df77a3cfe07_b.webp?consumer=ZHI_MENG",
//       picture: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202403/d74e3b0466b6ed7316d8bdd69b813f75--4196040656.jpg",
//       friendStatus: null,
//       sorted: null,
//       remark: "遇事不决,可问春风.春风不语,即随本心.",
//       createTime: null,
//       createBy: null,
//       updateTime: null,
//       updateBy: null
//     }
//   ]
// });

/** 友链数据查询 */
const handleList = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  try {
    // 重置数据
    friendList.value = [];
    const res: any = await list();
    friendList.value = res.data;
    loading.close();
  } catch (error) {
    console.log(error);
    loading.close();
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

onMounted(() => {
  handleList();
});

// 跳转网址
const handleWebSite = (website: string) => {
  window.open(website, "_blank");
};
</script>

<style scoped>
/* 0.5秒后消失 */
.animation-overlay {
  transition: opacity 0.5s ease;
}

.animation-overlay:hover {
  opacity: 0;
}

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
