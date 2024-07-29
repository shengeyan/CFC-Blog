<!-- 朋友圈页面 -->
<template>
  <div class="flex justify-center m-t-16px" v-for="(item, index) in circleList" :key="index">
    <!-- 头像 -->
    <el-image
      :src="item.avatar"
      fit="cover"
      :lazy="true"
      :preview-src-list="[item.avatar]"
      class="w-64px h-64px m-b-5px border-2px border-dashed rounded border-[--el-color-primary]"
    >
      <template #error>
        <el-image
          src="https://pic4.zhimg.com/v2-702a23ebb518199355099df77a3cfe07_b.webp"
          fit="cover"
          class="image-div"
        ></el-image>
      </template>
    </el-image>

    <!-- 昵称 和 九宫格 -->
    <div class="m-l-10px">
      <div class="flex m-x-1px">
        <!-- 昵称 -->
        <div class="line-height-normal">
          <div class="text-14px text-[--el-color-primary] font-bold w-300px line-clamp-1 m-b-5px">{{ item.nickName }}</div>
          <div class="text-15px text-#303536 dark:text-#F7F7F7 w-300px m-b-5px">
            {{ item.description }}
          </div>
        </div>
      </div>

      <!-- 九宫格 -->
      <div class="w-300px max-h-300px flex flex-wrap">
        <el-image
          v-for="(elem, index) in item.pictureList"
          :key="index"
          :src="elem"
          :lazy="true"
          :preview-src-list="[item.pictureList[index]]"
          fit="cover"
          class="image-div"
        >
          <template #error>
            <el-image src="https://pic4.zhimg.com/v2-702a23ebb518199355099df77a3cfe07_b.webp" fit="cover"></el-image>
          </template>
        </el-image>
      </div>
      <!-- 创建时间 -->
      <div class="m-t-6px text-12px text-#5A5A5A">创建时间：{{ item.createTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts" name="circlePage">
import { ref } from "vue";

const circleList = ref([
  {
    avatar: "https://foruda.gitee.com/avatar/1710744828463301493/5734968_bigcathome_1710744828.png!avatar200",
    nickName: "･ᴗ･",
    description: "不畏将来，不念过往，就是对时光最美的回应，愿这悠长岁月温柔安好。",
    pictureList: [
      "https://pic4.zhimg.com/v2-702a23ebb518199355099df77a3cfe07_b.webp",
      "https://pic2.zhimg.com/v2-44ce1b82f7e68de4078bf513221619e1_b.webp",
      "https://pic2.zhimg.com/v2-430e1a7dd0508a0b4b01dca9b94b22f5_b.webp",
      "https://pic3.zhimg.com/v2-b6c350529f3c06c8a90d886c311f3866_b.webp",
      "https://pic3.zhimg.com/v2-6e8ff25c222b6302cb836c9f6b013e7e_b.webp",
      "https://pic4.zhimg.com/v2-702a23ebb518199355099df77a3cfe07_b.webp",
      "https://pic2.zhimg.com/v2-d75d120cdab34142933ad9df18508ad1_b.webp",
      "https://pic3.zhimg.com/v2-a42559223697c17188a75ad3a10e1cea_b.webp",
      "https://pic1.zhimg.com/v2-8f1464d8a3c08945877959c496f7c9e8_b.webp"
    ],
    createTime: "2024-04-18 12:00:00"
  },
  {
    avatar: "https://foruda.gitee.com/avatar/1710744828463301493/5734968_bigcathome_1710744828.png!avatar200",
    nickName: "･ᴗ･",
    description: "身材不好就去锻炼，没钱就努力去赚。别把窘境迁怒于别人，你唯一可以抱怨的，只是不够努力的自己！",
    pictureList: [
      "https://pic1.zhimg.com/v2-60d16e77a47a49cfae8fb451ce514840_b.webp",
      "https://pic2.zhimg.com/v2-33ed1a36d5839f9b58acfaada58ec0dd_b.webp",
      "https://img2.baidu.com/it/u=4088284713,1109244362&fm=253&fmt=auto&app=138&f=JPEG",
      "https://pic1.zhimg.com/v2-c85f40d37d1ddd4a4d2ccd42b5a91dd0_b.webp",
      "https://pic4.zhimg.com/v2-352b7f0ef00f1efeb540574ee73baffb_b.webp",
      "https://pic3.zhimg.com/v2-1305555fcccb7c6f135dd5a7a1fb06e2_b.webp",
      "https://pic2.zhimg.com/v2-7a3e3a2725ea3f7cb319ed50510cc73d_b.webp",
      "https://pic2.zhimg.com/v2-4c9819a8c22123faf3ba7c19266ad095_b.webp",
      "https://pic1.zhimg.com/v2-3cbc889feac057cc7fb85a40c82598dc_b.webp"
    ],
    createTime: "2024-04-18 12:00:00"
  }
]);
</script>

<style scoped>
.image-div {
  @apply w-94px h-94px m-1px border-2px border-dashed rounded border-[--el-color-primary-light-6] hover:border-[--el-color-primary];
}
</style>
