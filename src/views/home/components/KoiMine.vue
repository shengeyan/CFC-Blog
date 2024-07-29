<template>
  <div
    class="mine-card shadow-sm rounded-18px h-400px border-2px border-solid border-[--el-color-primary-light-6] hover:border-[--el-color-primary-light-2]"
  >
    <div class="flex justify-center p-t-24px">
      <el-image
        src="https://foruda.gitee.com/avatar/1710744828463301493/5734968_bigcathome_1710744828.png!avatar200"
        fit="cover"
        class="w-110px h-110px rounded-25px border-solid border-2px border-[--el-color-primary-light-6]"
      >
        <template #error>
          <el-image
            src="https://pic4.zhimg.com/v2-702a23ebb518199355099df77a3cfe07_b.webp"
            fit="cover"
            class="w-110px h-110px rounded-25px border-solid border-2px border-[--el-color-primary-light-6]"
          ></el-image>
        </template>
      </el-image>
    </div>
    <div class="text-#333 text-24px font-bold m-15px text-center">{{ mine.nickName }}</div>
    <div class="text-[--el-color-primary-light-1] text-16px text-center font-600">{{ mine.description }}</div>
    <div class="flex justify-center m-t-16px">
      <div>
        <div class="m-b-6px text-#333 text-16px font-bold">文章</div>
        <div class="text-#222 text-22px">{{ mine.articleNumber }}</div>
      </div>
      <div class="m-x-30px">
        <div class="m-b-6px text-#333 text-16px font-bold">分类</div>
        <div class="text-#222 text-22px">{{ mine.typeNumber }}</div>
      </div>
      <div>
        <div class="m-b-6px text-#333 text-16px font-bold">标签</div>
        <div class="text-#222 text-22px">{{ mine.tagNumber }}</div>
      </div>
    </div>

    <div class="flex justify-center">
      <button
        class="border-none 2xl:w-252px lg:w-210px <lg:w-210px h-35px bg-[--el-color-primary] rounded-22px text-white font-bold text-14px uppercase m-t-16px hover:bg-[--el-color-primary-light-1] flex items-center justify-center"
        @click="handleLoginUrl"
      >
        <SvgIcon name="koi-menu-rocket" width="20px" height="20px" class="p-b-1px m-r-4px outline-none"></SvgIcon>
        <div>登&nbsp;&nbsp;录</div>
      </button>
    </div>
    <!-- TODO:论坛 -->
    <div class="flex justify-center">
      <button
        class="border-none 2xl:w-252px lg:w-210px <lg:w-210px h-35px bg-[--el-color-primary] rounded-22px text-white font-bold text-14px uppercase m-t-16px hover:bg-[--el-color-primary-light-1] flex items-center justify-center"
        @click="handleLoginUrl"
      >
        <SvgIcon name="koi-menu-sun" width="20px" height="20px" class="p-b-1px m-r-4px outline-none"></SvgIcon>
        <div>论&nbsp;&nbsp;坛</div>
      </button>
    </div>

    <!-- TODO：超链接部分 -->
    <!-- <div class="mt-12px flex justify-center">
      <SvgIcon
        name="koi-menu-gitee"
        width="30px"
        height="30px"
        class="p-b-1px m-r-18px outline-none"
        @click="handleWebsite(1)"
      ></SvgIcon>
      <SvgIcon
        name="koi-menu-weixin"
        width="31px"
        height="31px"
        class="p-b-1px m-r-18px outline-none"
        @click="handleWebsite(2)"
      ></SvgIcon>
      <SvgIcon
        name="koi-menu-bill"
        width="32px"
        height="32px"
        class="p-b-1px m-r-18px outline-none"
        @click="handleWebsite(3)"
      ></SvgIcon>
      <SvgIcon
        name="koi-menu-juejin"
        width="32px"
        height="32px"
        class="p-b-1px m-r-18px outline-none"
        @click="handleWebsite(4)"
      ></SvgIcon>
      <SvgIcon
        name="koi-menu-wycloud"
        width="32px"
        height="32px"
        class="p-b-1px outline-none"
        @click="handleWebsite(5)"
      ></SvgIcon>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { koiMsgWarning, koiNoticeError } from "@/utils/koi";
import { getMine } from "@/api/blog/article/index";

// Login FC
const handleLoginUrl = () => {
  window.open("http://39.107.143.109/login", "_blank");
};
// TODO
// const handleWebsite = (value: number) => {
//   if (value == 1) {
//     window.open("https://gitee.com/BigCatHome/koi-ui", "_blank");
//   }
//   if (value == 2) {
//     koiMsgWarning("微信号：QQ1736306607");
//   }
//   if (value == 3) {
//     window.open("https://space.bilibili.com/395991508/video", "_blank");
//   }
//   if (value == 4) {
//     window.open("https://juejin.cn/post/7332652230711164991", "_blank");
//   }
//   if (value == 5) {
//     window.open("https://music.163.com", "_blank");
//   }
// };

const mine = ref({
  nickName: "『Crazy For Code』",
  description: "🥳为自由而生！🥳",
  articleNumber: 0,
  typeNumber: 0,
  tagNumber: 0
});

/** 个人信息数据 */
const handleMine = async () => {
  try {
    const res: any = await getMine();
    // 重置数据
    mine.value = {
      nickName: "『于长生博客』",
      description: "爱意随风起，风止意难平",
      articleNumber: res.data.articleNumber,
      typeNumber: res.data.typeNumber,
      tagNumber: res.data.tagNumber
    };
  } catch (error) {
    console.log(error);
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

onMounted(() => {
  handleMine();
});
</script>

<style scoped>
/** 个人中心卡片样式开始 */
.mine-card {
  background: linear-gradient(135deg, hsl(170, 80%, 70%), hsl(190, 88%, 52%), hsl(278, 80%, 77%), hsl(335, 95%, 77%));
  /* 注意这里添加了分号 */
  background-size: 500%;
  /* 添加动画属性，并设置动画名称、时长、速度曲线和循环次数 */
  animation: gradient-move 8s linear infinite;
}

@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
/** 个人中心卡片样式结束 */
</style>
