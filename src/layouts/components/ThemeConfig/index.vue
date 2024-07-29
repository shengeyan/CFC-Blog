<template>
  <!-- 主题配置 608 -->
  <KoiDialog ref="koiDialogRef" title="主题配置" :footerHidden="true" :close-on-click-modal="true" top="6vh" :height="520">
    <template #content>
      <el-row>
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
          <div
            class="shadow-sm border-#9AC9F9 dark:border-#9AC9F9 sm:hover:border-#2992FF transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black"
            @click="changeThemeColor('#2992FF')"
            :class="{ themeSelected: globalStore.themeColor === '#2992FF' }"
            :style="{ 'border-color': globalStore.themeColor === '#2992FF' ? '#2992FF' : '' }"
          >
            <div class="m-l-4px w-8px h-50px bg-#2992FF rounded-md"></div>
            <div class="p-l-10px m-t-9px w-100% h-50px text-sm">
              <div class="p-b-4px c-#2992FF">兔子坦克形态</div>
              <div class="c-#2992FF">#2992FF<span> | </span>rgb(41, 146, 255)</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" class="p-l-5px">
          <div
            class="shadow-sm border-#A6ABF9 dark:border-#A6ABF9 sm:hover:border-#6169FF transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black"
            @click="changeThemeColor('#6169FF')"
            :class="{ themeSelected: globalStore.themeColor === '#6169FF' }"
            :style="{ 'border-color': globalStore.themeColor === '#6169FF' ? '#6169FF' : '' }"
          >
            <div class="m-l-4px w-8px h-50px bg-#6169FF rounded-md"></div>
            <div class="p-l-10px m-t-9px w-100% h-50px text-sm">
              <div class="p-b-4px c-#6169FF">鳄鱼恶霸形态</div>
              <div class="c-#6169FF">#6169FF<span> | </span>rgb(97, 105, 255)</div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row class="p-t-10px">
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
          <div
            class="shadow-sm border-#edc3ae dark:border-#edc3ae sm:hover:border-#fa7e23 transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black"
            @click="changeThemeColor('#fa7e23')"
            :class="{ themeSelected: globalStore.themeColor === '#fa7e23' }"
            :style="{ 'border-color': globalStore.themeColor === '#fa7e23' ? '#fa7e23' : '' }"
          >
            <div class="m-l-4px w-8px h-50px bg-#fa7e23 rounded-md"></div>
            <div class="p-l-10px m-t-9px w-100% h-50px text-sm">
              <div class="p-b-4px c-#fa7e23">巨龙熔岩形态</div>
              <div class="c-#fa7e23">#fa7e23<span> | </span>rgb(250, 126, 35)</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" class="p-l-5px">
          <div
            class="shadow-sm border-#f8df72 dark:border-#f8df72 sm:hover:border-#F9A407 transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black"
            @click="changeThemeColor('#F9A407')"
            :class="{ themeSelected: globalStore.themeColor === '#F9A407' }"
            :style="{ 'border-color': globalStore.themeColor === '#F9A407' ? '#F9A407' : '' }"
          >
            <div class="m-l-4px w-8px h-50px bg-#F9A407 rounded-md"></div>
            <div class="p-l-10px m-t-9px w-100% h-50px text-sm">
              <div class="p-b-4px c-#F9A407">向日癸形态</div>
              <div class="c-#F9A407">#F9A407<span> | </span>rgb(249, 164, 7)</div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row class="p-t-10px">
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
          <div
            class="shadow-sm border-#83cbac dark:border-#83cbac sm:hover:border-#20a162 transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black"
            @click="changeThemeColor('#20a162')"
            :class="{ themeSelected: globalStore.themeColor === '#20a162' }"
            :style="{ 'border-color': globalStore.themeColor === '#20a162' ? '#20a162' : '' }"
          >
            <div class="m-l-4px w-8px h-50px bg-#20a162 rounded-md"></div>
            <div class="p-l-10px m-t-9px w-100% h-50px text-sm">
              <div class="p-b-4px c-#20a162">自然精灵形态</div>
              <div class="c-#20a162">#20a162<span> | </span>rgb(32, 161, 98)</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" class="p-l-5px">
          <div
            class="shadow-sm border-#FC98AA dark:border-#FC98AA sm:hover:border-#ee4866 transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black"
            @click="changeThemeColor('#ee4866')"
            :class="{ themeSelected: globalStore.themeColor === '#ee4866' }"
            :style="{ 'border-color': globalStore.themeColor === '#ee4866' ? '#ee4866' : '' }"
          >
            <div class="m-l-4px w-8px h-50px bg-#ee4866 rounded-md"></div>
            <div class="p-l-10px m-t-9px w-100% h-50px text-sm">
              <div class="p-b-4px c-#ee4866">锦鲤粉形态</div>
              <div class="c-#ee4866">#ee4866<span> | </span>rgb(238, 72, 102)</div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row class="p-t-10px">
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
          <div
            class="shadow-sm border-#FB8F8F dark:border-#FB8F8F sm:hover:border-#FF0000 transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black"
            @click="changeThemeColor('#FF0000')"
            :class="{ themeSelected: globalStore.themeColor === '#FF0000' }"
            :style="{ 'border-color': globalStore.themeColor === '#FF0000' ? '#FF0000' : '' }"
          >
            <div class="m-l-4px w-8px h-50px bg-#FF0000 rounded-md"></div>
            <div class="p-l-10px m-t-9px w-100% h-50px text-sm">
              <div class="p-b-4px c-#FF0000">中国红形态</div>
              <div class="c-#FF0000">#FF0000<span> | </span>rgb(255, 0, 0)</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" class="p-l-5px">
          <div
            class="shadow-sm border-#90BBFB dark:border-#90BBFB sm:hover:border-#1E71EE transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black"
            @click="changeThemeColor('#1E71EE')"
            :class="{ themeSelected: globalStore.themeColor === '#1E71EE' }"
            :style="{ 'border-color': globalStore.themeColor === '#1E71EE' ? '#1E71EE' : '' }"
          >
            <div class="m-l-4px w-8px h-50px bg-#1E71EE rounded-md"></div>
            <div class="p-l-10px m-t-9px w-100% h-50px text-sm">
              <div class="p-b-4px c-#1E71EE">至尊龙形态</div>
              <div class="c-#1E71EE">#1E71EE<span> | </span>rgb(30, 113, 238)</div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :xs="{ span: 24 }" :sm="{ span: 24 }">
          <el-divider class="divider" content-position="center">
            <el-icon><Notification /></el-icon>
            系统配置
          </el-divider>
        </el-col>
      </el-row>

      <el-form label-width="auto" label-position="left" class="p-t-8px p-l-3px">
        <el-row>
          <el-col :xs="{ span: 24 }" :sm="{ span: 13 }">
            <el-form-item label="灰色模式">
              <el-switch
                active-text="启用"
                inactive-text="停用"
                :active-value="true"
                :inactive-value="false"
                :inline-prompt="true"
                v-model="isGrey"
                @change="changeGreyOrWeak('grey', !!$event)"
              >
              </el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="{ span: 24 }" :sm="{ span: 11 }">
            <el-form-item label="色弱模式">
              <el-switch
                active-text="启用"
                inactive-text="停用"
                :active-value="true"
                :inactive-value="false"
                :inline-prompt="true"
                v-model="isWeak"
                @change="changeGreyOrWeak('weak', !!$event)"
              >
              </el-switch>
            </el-form-item>
          </el-col>

          <el-col :xs="{ span: 24 }" :sm="{ span: 13 }">
            <el-dropdown @command="handlePreviewCommand">
              <el-button plain>
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
          </el-col>
          <el-col :xs="{ span: 24 }" :sm="{ span: 11 }">
            <el-dropdown @command="handleCodeCommand">
              <el-button plain>
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
          </el-col>
        </el-row>
      </el-form>
    </template>
  </KoiDialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 明亮主题和暗黑主题配色工具类
import { useTheme } from "@/utils/theme.ts";
import { storeToRefs } from "pinia";
import mittBus from "@/utils/mittBus.ts";
import useGlobalStore from "@/stores/modules/global.ts";

const globalStore = useGlobalStore();

const { changeThemeColor, changeGreyOrWeak } = useTheme();
const { isGrey, isWeak } = storeToRefs(globalStore);

/** 主题设置弹出框 */
const koiDialogRef = ref();
// 打开主题配置
const handleThemeConfig = () => {
  koiDialogRef.value.koiOpen();
};

// 打开主题配置对话框，on 接收事件
mittBus.on("handleThemeConfig", () => {
  handleThemeConfig();
});

/** 预览主题 */
const handlePreviewCommand = (command: string) => {
  globalStore.setGlobalState("previewTheme", command);
};

/** 代码主题 */
const handleCodeCommand = (command: string) => {
  globalStore.setGlobalState("codeTheme", command);
};
</script>

<style lang="scss" scoped>
// 图标颜色
.koi-icon {
  &:hover {
    color: var(--el-color-primary);
    cursor: pointer;
  }
}

/* 选中打钩效果 */
.themeSelected::before {
  position: absolute;
  right: 8px;
  bottom: 22px;
  font-size: 24px;
  content: "🌻";
  transform: scale(0); /* 初始状态下隐藏 */
}
.themeSelected {
  position: relative;
}
.themeSelected::before {
  transform: scale(1); /* 选中状态下显示 */
}
</style>
