<!-- 简介页面 -->
<template>
  <div class="p-x-36px m-t-10px">
    <!-- 个人标签 -->
    <KoiAuthor></KoiAuthor>
    <div class="flex justify-center m-t-16px">
      <!-- 左侧卡片 -->
      <div class="bg-#FFF dark:bg-[rgba(0,0,0,0.5)] p-20px rounded-20px shadow-md min-w-260px h-880px select-none">
        <!-- 期望目标 -->
        <div class="flex flex-col m-b-8px">
          <div class="text-18px font-bold m-b-8px p-b-6px border-t-0 border-x-0 border-b-1px border-solid border-#AAAAAA">
            期望目标
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            - 崇尚自由，追求极致，向往远方，永不言弃
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            - 拥有强大的自驱力，有独特的想法且不畏惧付诸实践
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            - 认同我们是一个学生技术团队而非一般的学生组织
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            - 善于学习，乐于分享，热爱交流，愿意与团队携手共进
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            - 思维活跃，保持好奇，拥抱开源，有对技术的执着与对代码的热爱
          </div>
        </div>
        <!-- 关于我们 -->
        <div class="flex flex-col m-b-8px">
          <div class="text-18px font-bold m-b-8px p-b-6px border-t-0 border-x-0 border-b-1px border-solid border-#AAAAAA">
            关于我们
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            Crazy For Code
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            年龄：11岁
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            地址：花溪校区 4-203 | 花溪校区 4-605
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            指导老师：苟光磊
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            电话：xxxxxxxxxxxxx
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            邮箱：xxxxxxxxxxxxx
          </div>
        </div>
        <!-- 学习交流 -->
        <div class="flex flex-col m-b-8px">
          <div class="text-18px font-bold m-b-8px p-b-6px border-t-0 border-x-0 border-b-1px border-solid border-#AAAAAA">
            学习交流
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            CFC LightON
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            CFC GeekTime
          </div>
          <div
            class="text-14px m-b-6px p-b-6px text-#303536 dark:text-#F7F7F7 border-t-0 border-x-0 border-b-1px border-solid border-#DDD"
          >
            Free Time
          </div>
        </div>
        <!-- 研究方向 -->
        <div class="flex flex-col m-b-8px">
          <div class="text-18px font-bold m-b-8px p-b-6px border-t-0 border-x-0 border-b-1px border-solid border-#AAAAAA">
            研究方向
          </div>
          <div class="m-b-6px">
            <div class="text-13px m-b-4px">后端开发</div>
            <el-progress :percentage="80" :indeterminate="true" :duration="2" status="success" />
          </div>
          <div class="m-b-6px">
            <div class="text-13px m-b-4px">前端开发</div>
            <el-progress :percentage="80" :indeterminate="true" :duration="2" status="success" color="#1989fa" />
          </div>
          <div class="m-b-6px">
            <div class="text-13px m-b-4px">游戏开发</div>
            <el-progress :percentage="70" :indeterminate="true" :duration="2" status="success" color="#67C23A" />
          </div>
          <div class="m-b-6px">
            <div class="text-13px m-b-4px">操作系统</div>
            <el-progress :percentage="70" :indeterminate="true" :duration="2" status="success" color="#E6A23C" />
          </div>
          <div class="m-b-6px">
            <div class="text-13px m-b-4px">网络安全</div>
            <el-progress :percentage="50" :indeterminate="true" :duration="2" status="success" color="#F56C6C" />
          </div>
          <div class="m-b-6px">
            <div class="text-13px m-b-4px">嵌入式开发</div>
            <el-progress :percentage="80" :indeterminate="true" :duration="2" status="success" color="#FC7830" />
          </div>
          <div class="m-b-6px">
            <div class="text-13px m-b-4px">计算机视觉</div>
            <el-progress :percentage="80" :indeterminate="true" :duration="2" status="success" color="#909399" />
          </div>
        </div>
      </div>

      <!-- 右侧卡片 -->
      <div
        class="bg-#FFF <xl:hidden overflow-x-auto dark:bg-[rgba(0,0,0,0.5)] p-15px rounded-20px shadow-md m-l-16px max-w-900px"
      >
        <!-- 项目时间线 -->
        <KoiTimeline></KoiTimeline>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KoiAuthor from "./components/KoiAuthor.vue";
import KoiTimeline from "./components/KoiTimeline.vue";
</script>

<style scoped></style>
