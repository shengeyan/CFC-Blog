<template>
  <div class="p-x-16px p-t-6px">
    <el-row :gutter="10">
      <!-- 左侧布局开始 -->
      <el-col :xl="19" :md="18" :sm="15" :xs="24">
        <!-- 头部图片 -->
        <div class="relative rounded">
          <el-image :src="picture" fit="cover" :preview-src-list="[picture]" class="w-100% h-420px rounded-10px">
            <template #error>
              <el-image
                src="http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202404/08ebcae931494e226a5891f5eab88b34--2718519177.jpg"
                fit="cover"
                :preview-src-list="['http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202404/08ebcae931494e226a5891f5eab88b34--2718519177.jpg']"
                class="w-100% h-420px rounded-10px"
              ></el-image>
            </template>
          </el-image>
          <div class="absolute left-4px top-4px">
            <div class="text-#FFF text-14px whitespace-nowrap bg-[rgba(0,0,0,0.3)] p-x-6px p-y-4px rounded">
              ☃️{{ typeName }}
            </div>
          </div>
          <div class="absolute right-0 top-4px flex flex-row <sm:hidden">
            <div
              class="text-#FFF text-14px whitespace-nowrap bg-[rgba(0,0,0,0.3)] p-x-6px p-y-4px m-r-4px rounded"
              v-for="item in tagList"
              :key="item.tagId"
            >
             💯{{ item.tagName }}
            </div>
          </div>
          <div class="absolute left-4px bottom-6px">
            <div class="text-#FFF bg-[rgba(0,0,0,0.4)] rounded-8px flex flex-col p-x-10px p-y-8px">
              <el-icon :size="20" class="m-b-8px"><AlarmClock /></el-icon>
              <div class="text-13px">创建人：{{ createBy }}</div>
              <div class="text-12px m-t-10px">创建时间：{{ createTime }}</div>
            </div>
          </div>
        </div>
        <!-- 文章内容 -->
        <div
          class="article-content bg-[rgba(255,255,255,0.6)] border-2px border-dashed border-[--el-color-primary] rounded-10px shadow-md p-x-20px p-y-6px dark:bg-#2A2A2A dark:text-#FFF m-t-10px"
        >
          <!-- 文章标题 -->
          <div class="text-[--el-color-primary] rounded-8px bg-white dark:bg-black flex flex-col p-x-10px p-y-8px line-height-normal max-h-78px overflow-hidden m-b-6px border-solid border-2px border-[--el-color-primary-light-9]">
            <div class="text-18px line-clamp-3">🌈 {{ articleTitle }}</div>
          </div>
          <MdPreview
            class="w-100%"
            v-model="content"
            :editorId="editorId"
            :theme="globalStore.isDark ? 'dark' : 'light'"
            :previewTheme="globalStore.previewTheme"
            :codeTheme="globalStore.codeTheme"
          />

          <!-- 上一篇，下一篇 -->
          <el-row :gutter="10">
            <el-col :xl="12" :md="12" :sm="24" :xs="24" v-if="upChapter" class="m-t-6px">
              <div
                class="border-2px border-dashed rounded-10px border-#7E7E7E hover:border-[--el-color-primary] p-x-4px p-t-4px flex m-t-2px"
                @click="handleUpChapter(upChapter.articleId)"
              >
                <!-- 图片 -->
                <div class="relative w-100% rounded">
                  <el-image :src="upChapter.picture" fit="cover" class="w-100% h-200px rounded">
                    <template #error>
                      <el-image
                        src="http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202404/08ebcae931494e226a5891f5eab88b34--2718519177.jpg"
                        fit="cover"
                        class="w-100% h-200px rounded"
                      ></el-image>
                    </template>
                  </el-image>
                  <div class="absolute left-0 top-0">
                    <div class="text-#FFF text-14px whitespace-nowrap bg-[rgba(0,0,0,0.4)] p-x-6px p-y-4px rounded-4px">
                      {{ typeName }}
                    </div>
                  </div>
                  <!-- 黑色透明背景 -->
                  <div class="absolute left-0 top-0 w-100% h-200px bg-[rgba(0,0,0,0.3)] rounded-4px"></div>
                  <div class="absolute left-20% top-22%">
                    <div class="text-#FFF flex">
                      <el-icon :size="18"><Back></Back></el-icon>
                      <div class="m-l-10px">上一篇</div>
                    </div>
                    <div class="text-#FFF m-t-10px text-18px line-clamp-2 h-45px">
                      {{ upChapter.articleTitle }}
                    </div>
                    <div class="text-#FFF m-t-10px text-12px whitespace-nowrap line-clamp-1 flex">
                      <div>创建人：{{ upChapter.createBy }}</div>
                      <div class="m-l-10px">创建时间：{{ upChapter.createTime }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xl="12" :md="12" :sm="24" :xs="24" v-if="nextChapter" class="m-t-6px">
              <div
                class="border-2px border-dashed rounded-10px border-#7E7E7E hover:border-[--el-color-primary] p-x-4px p-t-4px flex"
                @click="handleNextChapter(nextChapter.articleId)"
              >
                <!-- 图片 -->
                <div class="relative w-100% rounded">
                  <el-image :src="nextChapter.picture" fit="cover" class="w-100% h-200px rounded">
                    <template #error>
                      <el-image
                        src="http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202404/08ebcae931494e226a5891f5eab88b34--2718519177.jpg"
                        fit="cover"
                        class="w-100% h-200px rounded"
                      ></el-image>
                    </template>
                  </el-image>
                  <div class="absolute left-0 top-0">
                    <div class="text-#FFF text-14px whitespace-nowrap bg-[rgba(0,0,0,0.3)] p-x-6px p-y-4px rounded-4px">
                      {{ typeName }}
                    </div>
                  </div>
                  <!-- 黑色透明背景 -->
                  <div class="absolute left-0 top-0 w-100% h-200px bg-[rgba(0,0,0,0.3)] rounded-4px"></div>
                  <div class="absolute left-20% top-22%">
                    <div class="text-#FFF flex">
                      <div class="m-r-10px">下一篇</div>
                      <el-icon :size="18"><Right></Right></el-icon>
                    </div>
                    <div class="text-#FFF m-t-10px text-18px line-clamp-2 h-45px">
                      {{ nextChapter.articleTitle }}
                    </div>
                    <div class="text-#FFF m-t-10px text-12px whitespace-nowrap line-clamp-1 flex">
                      <div>创建人：{{ nextChapter.createBy }}</div>
                      <div class="m-l-10px">创建时间：{{ nextChapter.createTime }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <!-- 右侧布局 -->
      <el-col :xl="5" :md="6" :sm="9" :xs="0">
        <div class="m-b-10px">
          <KoiMine></KoiMine>
        </div>
        <div class="sticky top-70px rounded-8px bg-white dark:bg-black border-dashed border-2px border-[--el-color-primary] shadow-md p-t-16px p-b-6px p-l-16px">
          <div class="mb-10px">
            <el-dropdown @command="handlePreviewCommand">
              <el-button plain size="small">
                预览主题<el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="default" :disabled="globalStore.previewTheme == 'default'">default</el-dropdown-item>
                  <el-dropdown-item command="github" :disabled="globalStore.previewTheme == 'github'">github</el-dropdown-item>
                  <el-dropdown-item command="vuepress" :disabled="globalStore.previewTheme == 'vuepress'"
                    >vuepress</el-dropdown-item
                  >
                  <el-dropdown-item command="mk-cute" :disabled="globalStore.previewTheme == 'mk-cute'">mk-cute</el-dropdown-item>
                  <el-dropdown-item command="smart-blue" :disabled="globalStore.previewTheme == 'smart-blue'"
                    >smart-blue</el-dropdown-item
                  >
                  <el-dropdown-item command="cyanosis" :disabled="globalStore.previewTheme == 'cyanosis'"
                    >cyanosis</el-dropdown-item
                  >
                  <el-dropdown-item command="codeTheme" :disabled="globalStore.previewTheme == 'codeTheme'"
                    >codeTheme</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown class="m-l-6px" @command="handleCodeCommand">
              <el-button plain size="small">
                代码主题<el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="atom" :disabled="globalStore.codeTheme == 'atom'">atom</el-dropdown-item>
                  <el-dropdown-item command="a11y" :disabled="globalStore.codeTheme == 'a11y'">a11y</el-dropdown-item>
                  <el-dropdown-item command="github" :disabled="globalStore.codeTheme == 'github'">github</el-dropdown-item>
                  <el-dropdown-item command="gradient" :disabled="globalStore.codeTheme == 'gradient'">gradient</el-dropdown-item>
                  <el-dropdown-item command="kimbie" :disabled="globalStore.codeTheme == 'kimbie'">kimbie</el-dropdown-item>
                  <el-dropdown-item command="paraiso" :disabled="globalStore.codeTheme == 'paraiso'">paraiso</el-dropdown-item>
                  <el-dropdown-item command="qtcreator" :disabled="globalStore.codeTheme == 'qtcreator'"
                    >qtcreator</el-dropdown-item
                  >
                  <el-dropdown-item command="stackoverflow" :disabled="globalStore.codeTheme == 'stackoverflow'"
                    >stackoverflow</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <!-- 目录标题 -->
          <div class="flex items-center text-18px mb-2 font-bold text-gray-900 dark:text-white select-none">
            <!-- 目录图标 -->
            <svg
              t="1699441758495"
              class="icon w-18px h-18px mr-2"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4043"
              width="200"
              height="200"
            >
              <path
                d="M857.6 25.6a76.8 76.8 0 0 1 76.8 76.8v819.2a76.8 76.8 0 0 1-76.8 76.8H166.4a76.8 76.8 0 0 1-76.8-76.8V102.4a76.8 76.8 0 0 1 76.8-76.8h691.2z m-102.4 678.4H473.6l-2.2528 0.064a38.4 38.4 0 0 0 0 76.672L473.6 780.8h281.6l2.2528-0.064a38.4 38.4 0 0 0 0-76.672L755.2 704z m0-230.4H473.6l-2.2528 0.064a38.4 38.4 0 0 0 0 76.672L473.6 550.4h281.6l2.2528-0.064a38.4 38.4 0 0 0 0-76.672L755.2 473.6z m0-230.4H473.6l-2.2528 0.064a38.4 38.4 0 0 0 0 76.672L473.6 320h281.6l2.2528-0.064a38.4 38.4 0 0 0 0-76.672L755.2 243.2z"
                fill="#6B57FE"
                p-id="4044"
              ></path>
              <path
                d="M281.6 691.2a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m0-230.4a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m0-230.4a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z"
                fill="#FFBA00"
                p-id="4045"
              ></path>
            </svg>
            文章目录
          </div>
          <div class="overflow-y-auto 2xl:max-h-700px <2xl:max-h-620px <xl:max-h-600px <md:hidden">
            <MdCatalog :editorId="editorId" :scrollElement="scrollElement" :offsetTop="80" :scrollElementOffsetTop="70" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="contentPage">
import { ref, onMounted } from "vue";
import { getContent } from "@/api/blog/content/index.ts";
import { ElLoading } from "element-plus";
import { koiMsgWarning, koiNoticeError } from "@/utils/koi.ts";
import KoiMine from "@/views/home/components/KoiMine.vue";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import useGlobalStore from "@/stores/modules/global.ts";
import { useRoute, useRouter } from "vue-router";
// import mittBus from "@/utils/mittBus.ts";

const globalStore = useGlobalStore();
const route = useRoute();
const router = useRouter();

const routeParam = ref();

const editorId = ref("KOI-MD-EDITOR");
const scrollElement = ref<any>(document.documentElement);

onMounted(() => {
  routeParam.value = route.params.articleId || "";
  handleContent();
});

// const isFixed = ref();

// 使用Bus总线，解决多个监听时间错乱问题。这里直接使用粘性定位，就不会有这个问题了。
// mittBus.on("handleOnScroll", (scrollY: any) => {
//   if (scrollY > 460) {
//     // 如果滚动回到了顶部，0代表0px
//     isFixed.value = "fixed";
//   } else {
//     isFixed.value = "";
//   }
// });

const articleTitle = ref();
const content = ref();
const createBy = ref();
const createTime = ref();
const typeName = ref();
const picture = ref();
const tagList = ref();
const upChapter = ref();
const nextChapter = ref();
/** 文章数据查询 */
const handleContent = async () => {
  if (!routeParam.value) {
    koiMsgWarning("未获取到文章ID，请返回首页重试");
  }
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  try {
    const res: any = await getContent(routeParam.value);
    content.value = res.data.content;
    createBy.value = res.data.createBy;
    createTime.value = res.data.createTime;
    typeName.value = res.data.typeName;
    picture.value = res.data.picture;
    upChapter.value = res.data.upChapter;
    nextChapter.value = res.data.nextChapter;
    articleTitle.value = res.data.articleTitle;
    tagList.value = res.data.tagList;
    loading.close();
  } catch (error) {
    console.log(error);
    loading.close();
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

/** 上一篇 */
const handleUpChapter = (articleId: any) => {
  router.push("/article/content/" + articleId);
};

/** 下一篇 */
const handleNextChapter = (articleId: any) => {
  router.push("/article/content/" + articleId);
};

/** 预览主题 */
const handlePreviewCommand = (command: string) => {
  globalStore.setGlobalState("previewTheme", command);
};

/** 代码主题 */
const handleCodeCommand = (command: string) => {
  globalStore.setGlobalState("codeTheme", command);
};
</script>

<style scoped>
:deep(h1) {
  margin-top: 0px;
}

:deep(.md-editor-catalog-active > span) {
  color: var(--el-color-primary);
}
</style>
