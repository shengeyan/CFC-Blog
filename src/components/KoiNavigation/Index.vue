<template>
  <div class="flex flex-items-center justify-center">
    <!-- 外层盒子 -->
    <div class="nav-box" v-for="item in menuList" :key="item.path" v-show="item.meta?.isHide == '1'">
      <!-- 一级菜单 + 二级菜单盒子 -->
      <div class="nav-item bottom-line" v-if="menuList.length > 0">
        <!-- 一级菜单 -->
        <div class="nav-one flex flex-items-center" v-if="item.meta?.isHide == '1'" @click="handleMenuRouter(item)">
          <SvgIcon :width="svgSize" :height="svgSize" :name="item?.meta.icon" class="m-b-1px"
            v-if="item.meta.icon && item.meta.icon.indexOf(SVG_PREFIX) == 0"></SvgIcon>
          <el-icon v-if="item.meta.icon && item.meta.icon.indexOf(SVG_PREFIX) == -1" class="m-b-1px">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <div class="nav-one-title flex flex-items-center">
            <div class="nav-one-font">{{ item.meta?.title }}</div>
            <el-icon :size="12" class="nav-one-icon" v-if="item?.children">
              <ArrowDownBold />
            </el-icon>
          </div>
        </div>

        <!-- 二级菜单 -->
        <div class="nav-two" v-if="item?.children">
          <div class="nav-two-item flex flex-items-center" v-for="child in item?.children" :key="child.path"
            @click="handleMenuRouter(child)">
            <SvgIcon :width="svgSize" :height="svgSize" :name="child?.meta.icon" class="m-b-1px"
              v-if="child.meta.icon && child.meta.icon.indexOf(SVG_PREFIX) == 0"></SvgIcon>
            <el-icon v-if="child.meta.icon && child.meta.icon.indexOf(SVG_PREFIX) == -1" class="m-b-1px">
              <component :is="child.meta.icon"></component>
            </el-icon>
            <div class="nav-two-title"> {{ child?.meta.title }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { SVG_PREFIX } from "@/config/index.ts";
import { useRouter } from "vue-router";

const router = useRouter();

// 定义参数的类型
interface INavigationProps {
  color?: string;
  svgSize?: string;
  fontSize?: string,
  fontWeight?: number,
  menuList?: any;
}

const props = withDefaults(defineProps<INavigationProps>(), {
  color: "#303536",
  svgSize: "18px",
  fontSize: "15px",
  fontWeight: 600,
  menuList: []
});

const { color, svgSize, fontSize, fontWeight, menuList } = toRefs(props);

/* 打开外部标签页 */
const handleMenuRouter = (value: any) => {
  if (value.meta?.isLink) return window.open(value.meta.isLink, "_blank");
  router.push(value.path);
};
</script>

<style scoped>
/** 外层盒子 */
.nav-box {
  border-radius: 2px;
  background-color: transparent;
  padding: 15px 8px;
  user-select: none;
}
/** 外层盒子悬浮 */
/* .nav-box:hover {
  background: rgba(0, 0, 0, 0.06);
  @apply dark:bg-[rgba(255,255,255,0.06)]
} */

/** 一级菜单盒子[里面包含二级菜单盒子] */
.nav-item {
  background-color: transparent;
  color: v-bind(color);
}

/** 一级菜单悬浮，二级菜单显示 */
.nav-item:hover .nav-two {
  opacity: 1;
  visibility: visible;
  transition: none;
  /* 鼠标悬浮时取消过渡效果，实现瞬间出现 */
}

/** 旋转图标 */
.nav-item:hover .nav-one-icon {
  transition: 0.3s;
  /* color: var(--el-color-primary); */
  transform: rotate(-90deg);
}

/** 二级字体悬浮，一级菜单字体颜色改变 */
/* .nav-item:hover .nav-one {
  color: var(--el-color-primary);
} */

.nav-one {
  /** 相对于一级菜单 */
  position: relative;
  font-size: v-bind(fontSize);
  font-weight: v-bind(fontWeight);
  color: #303536;
  @apply dark:c-#F7F7F7 dark:font-500;
  @apply border-b-8px border-solid border-transparent;
}

/** 一级菜单悬浮字体颜色 */
.nav-one:hover {
  color: var(--el-color-primary);
}

/** 一级菜单字体颜色、大小等 */
.nav-one-title {
  margin-left: 4px;
}

.nav-one-font {
  margin-right: 4px;
}

/** 二级菜单 */
.nav-two {
  /* 隐藏初始状态 */
  /* display: none;  */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0s 1s;
  background-color: #FFFFFF;
  @apply dark:bg-#3C3C3C dark:font-500;
  padding: 10px 5px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* transform: translateX(-10px); */
  /* 脱离文档流，不占据空间 */
  position: absolute;
  /* 定位在一级菜单下方 */
  top: 45px;
}

/** 二级菜单盒子[图标、字体] */
.nav-two-item {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 15px;
  padding-right: 26px;
  color: #303536;
  @apply dark:c-#F7F7F7 dark:font-500;
  font-size: v-bind(fontSize);
  font-weight: v-bind(fontWeight);
  transition: transform 0.3s ease;
  will-change: transform;
  /* 不允许内容溢出容器 */
  overflow: hidden;
  /* 文本不会自动换行 */
  white-space: nowrap;
  /* 超出容器的文本内容用省略号表示 */
  text-overflow: ellipsis;
}

/** 二级菜单悬浮字体颜色 */
.nav-two-item:hover {
  color: var(--el-color-primary);
  transform: translateX(5px);
  transition: transform 0.5s ease;
}

/** 二级菜单字体颜色、大小等 */
.nav-two-title {
  margin-left: 4px;
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
