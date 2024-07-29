<template>
  <div>
    <div class="max-w-1440px relative">
      <!-- 图片 -->
      <div
        class="m-auto cartoon-picture"
        :style="{ background: `url(${cartoonPicture})` }"
        style="background-repeat: no-repeat; background-size: contain; width: 790px; height: 294px"
      ></div>
      <!-- 首页图片标题 -->
      <div class="select-none text-middle">
        <div class="font-bold text-30px <xl:text-20px <xl:leading-20px printer-text">Welcome CFC Blog</div>
        <div class="font-bold m-t-26px text-18px text-[--el-color-primary] chroma-text">崇尚自由-追求极致-向往远方-永不言弃</div>
        <!-- <button class="w-200px h-45px bg-white border-2px border-solid border-#fff rounded-25px font-bold text-16px uppercase m-t-26px hover:bg-transparent hover:text-white duration-150" @click="scrollToNextPage">LEARN MORE</button> -->
      </div>
      <!-- 搜索框 -->
      <div
        class="search-middle w-800px <lg:w-660px <md:w-560px <sm:w-320px p-8px <lg:p-6px <md:p-4px bg-[rgba(255,255,255,0.6)] rounded-10px shadow-sm border-2px border-solid border-[--el-color-primary-light-3] flex items-center"
      >
        <input
          type="text"
          placeholder="请输入文章标题"
          v-model="searchParams.articleTitle"
          @keyup.enter.native="handleSearch"
          class="w-100% h-26px <lg:h-26px <md:h-20px <md:text-14px bg-transparent border-0 text-18px outline-0 font-bold text-[--el-color-primary]"
        />
        <el-icon :size="26" class="p-b-1px m-r-4px outline-none text-[--el-color-primary]" @click="handleSearch">
          <Search />
        </el-icon>
      </div>
    </div>

    <!-- 下方总布局开始 -->
    <el-row :gutter="10">
      <!-- 左侧布局开始 -->
      <el-col :xl="19" :md="18" :sm="15" :xs="24">
        <!-- 文章分类 -->
        <div
          :class="{ 'overflow-auto h-auto': isOverflow }"
          class="relative h-36px overflow-hidden m-b-10px m-t-2px p-8px bg-#FAFAFA rounded-18px dark:bg-[rgba(0,0,0,0.3)] border-2px border-dashed border-[--el-color-primary-light-3] hover:border-[--el-color-primary]"
        >
          <div class="flex items-center flex-wrap gap-6px text-16px m-r-16px">
            <div
              class="p-x-6px p-y-8px text-#464646 bg-[rgba(0,0,0,0.03)] dark:text-#FAFAFA font-bold hover:text-#FAFAFA hover:bg-[--el-color-primary-light-3] rounded-8px whitespace-nowrap line-clamp-1 select-none"
              v-for="item in articleTypeList"
              :key="item.typeId"
              @click="handleArticleType(item.typeId)"
              :class="{
                'text-#FAFAFA! bg-[--el-color-primary]!': typeId == item.typeId
              }"
            >
              {{ item.typeName }}
            </div>
            <div class="absolute top-10px right-6px hover:text-[--el-color-primary]">
              <el-button circle @click="handleIsOverflow">
                <el-icon v-if="!isOverflow">
                  <plus />
                </el-icon>
                <el-icon v-else>
                  <Minus />
                </el-icon>
              </el-button>
            </div>
          </div>
        </div>

        <el-row :gutter="10">
          <el-col :xl="8" :md="8" :sm="12" :xs="24" v-for="item in blogList" :key="item.articleId">
            <!-- 文章卡片开始 -->
            <div
              v-if="total > 0"
              class="relative m-b-16px bg-#FAFAFA dark:bg-[#3A3A3A] text-[#FFFFFF] rounded-xl transition duration-150 ease-in-out hover:-translate-y-2 border-2px border-solid border-[--el-color-primary-light-6] hover:border-[--el-color-primary] h-436px <xl:h-452px <sm:h-436px <sm:m-x-3px"
              @click="handleArticleContent(item.articleId)"
            >
              <el-image
                style="width: 100%"
                class="picture-mask h-222px"
                fit="cover"
                :src="
                  item.picture != null && item.picture != ''
                    ? item.picture
                    : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
                "
              >
                <template #error>
                  <el-icon class="c-[--el-color-primary]" :size="222">
                    <CircleCloseFilled />
                  </el-icon>
                </template>
              </el-image>
              <div class="text-#FAFAFA absolute top-4px left-4px">
                <div class="text-sm inline-block whitespace-nowrap bg-[rgba(0,0,0,0.3)] p-x-6px p-y-4px rounded-4px">
                  {{ item.typeName }}
                </div>
              </div>
              <!-- 标题和标签 -->
              <div class="mx-16px mt-8px">
                <span class="bottom-line dark:text-white text-22px text-#1D1D1D font-bold line-clamp-2 h-56px">{{
                  item.articleTitle
                }}</span>
                <div class="flex flex-wrap gap-6px mt-6px text-12px text-[--el-color-primary] max-h-40px">
                  <div
                    v-for="elem in item.tagList"
                    :key="elem.tagId"
                    class="max-w-100px rounded border-1px border-solid border-[--el-color-primary-light-7] line-clamp-1 bg-[--el-color-primary-light-9] backdrop-blur-3xl p-x-4px p-y-2px"
                  >
                    # {{ elem.tagName }}
                  </div>
                </div>
                <div class="mt-12px dark:text-#D8D8D8 text-#7E7E7E text-14px leading-6 line-clamp-3 h-66px">
                  {{ item.remark }}
                </div>
                <div class="mt-16px text-12px text-#7E7E7E h-16px line-clamp-1">
                  <span
                    >{{ item.createBy }} <span class="text-[--el-color-primary] m-x-5px">|</span> 发布于{{
                      item.createTime
                    }}</span
                  >
                </div>
              </div>
            </div>
            <!-- 文章卡片结束 -->
          </el-col>
        </el-row>
        <div class="flex justify-center" v-if="total == 0">
          <el-empty :image="noPicture" :image-size="360" description="主人，没有数据了哟👻"></el-empty>
        </div>
        <div class="flex justify-center p-t-10px">
          <!-- 分页 -->
          <el-pagination
            background
            :pager-count="5"
            v-model:current-page="searchParams.pageNo"
            v-model:page-size="searchParams.pageSize"
            v-show="total > 0"
            layout="total, prev, pager, next, jumper"
            :total="total"
            @size-change="handleListPage"
            @current-change="handleListPage"
          />
        </div>
      </el-col>
      <!-- 左侧布局结束 -->

      <!-- 右侧布局开始 -->
      <el-col :xl="5" :md="6" :sm="9" :xs="0">
        <!-- 个人中心 -->
        <KoiMine></KoiMine>
        <!-- 热门推荐 -->
        <KoiRecommend></KoiRecommend>
        <!-- 最近更新 -->
        <KoiNewest></KoiNewest>
      </el-col>
      <!-- 右侧布局结束 -->
       
    </el-row>
    <!-- 下方总布局结束 -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import KoiMine from "./components/KoiMine.vue";
import KoiRecommend from "./components/KoiRecommend.vue";
import KoiNewest from "./components/KoiNewest.vue";
import { getAssets } from "@/utils/index";
import { ElLoading } from "element-plus";
import { koiNoticeError } from "@/utils/koi";
import { listPage } from "@/api/blog/article/index";
import { listType } from "@/api/blog/type/index";
// import mittBus from "@/utils/mittBus.ts";
import { useRouter } from "vue-router";

const router = useRouter();

const cartoonPicture = ref(`${getAssets("images/bg/homePicture.webp")}`);
const noPicture = ref(`${getAssets("images/error/404.png")}`);

const articleTypeList = ref();

/** 点击文章类型 */
const typeId = ref("0");
const handleArticleType = (value: string) => {
  typeId.value = value;
  searchParams.value.typeId = value;
  handleListPage();
};

/** 分类多个是否显示 */
const isOverflow = ref(false);
const handleIsOverflow = () => {
  isOverflow.value = !isOverflow.value;
};
/** 查询参数 */
const searchParams = ref({
  pageNo: 1, // 第几页
  pageSize: 9, // 每页显示多少条
  articleTitle: "",
  typeId: ""
});

const total = ref<number>(0);

/** 搜索 */
const handleSearch = () => {
  console.log("搜索");
  searchParams.value.pageNo = 1;
  handleListPage();
};

const blogList = ref();

/** 文章数据查询 */
const handleListPage = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  try {
    // 重置数据
    blogList.value = [];
    const res: any = await listPage(searchParams.value);
    blogList.value = res.data.records;
    total.value = res.data.total;
    loading.close();
  } catch (error) {
    console.log(error);
    loading.close();
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

/** 文章分类查询 */
const handleListType = async () => {
  try {
    // 重置数据
    articleTypeList.value = [];
    const res: any = await listType();
    articleTypeList.value = res.data;
  } catch (error) {
    console.log(error);
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

onMounted(() => {
  handleListPage();
  handleListType();
});

/** 跳转文章内容 */
const handleArticleContent = (articleId: any) => {
  router.push("/article/content/" + articleId);
};

// 发布文章，刷新页面接口数据，on 接收事件[发布过后，手动刷新即可。使用这个自动刷新也行]
// mittBus.on("handleListPage", () => {
//   handleListPage();
// });
</script>

<style lang="scss" scoped>
/** 动漫背景图片 */
// .cartoon-picture {
//   background-image: url("@/assets/images/bg/homePicture.webp");
//   background-repeat: no-repeat;
//   background-size: contain;
//   width: 790px;
//   height: 294px;
// }

/** 文字覆盖在中间 */
.text-middle {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/** 搜索框在中间 */
.search-middle {
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.search-middle input::placeholder {
  font-size: 18px;
  font-weight: bold;
  @apply text-[--el-color-primary-light-3] <md:text-15px <lg:text-16px;
}

/** 文章卡片样式开始 */
.picture-mask {
  border-radius: 10px 10px 0px 0px;
  mask-image: linear-gradient(rgb(227, 227, 227), 80%, transparent);
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

/** 文章卡片样式结束 */

/** 打印字体效果开始 */
.printer-text {
  background: linear-gradient(270deg, rgba(198, 141, 255, 0.9) 8.92%, #5685ff 46.17%, #48d6ff 92.17%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  animation: animateText 6s steps(10) infinite;
  -webkit-animation: animateText 6s steps(10) infinite;
}

@keyframes animateText {
  0% {
    width: 0;
  }

  35% {
    width: 298px;
  }

  75% {
    width: 298px;
  }

  100% {
    width: 0;
  }
}

/** 打印字体效果结束 */

/** 彩色字体 */
.chroma-text {
  background: linear-gradient(270deg, rgba(198, 141, 255, 0.9) 8.92%, #5685ff 46.17%, #48d6ff 92.17%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  color: transparent;
}
</style>
