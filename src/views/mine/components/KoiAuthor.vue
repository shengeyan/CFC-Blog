<template>
  <div class="author-main">
    <div class="<md:hidden">
      <div class="author-tag-left">
        <span class="author-tag">🌈 开发工程师</span>
        <span class="author-tag" @click="handleKoiAdmin">🎉 CFC-ADMIN</span>
        <span class="author-tag" @click="handleKoiBlog">✨️ @CFC-BlOG</span>
        <span class="author-tag">🪄 @向往远方</span>
      </div>
    </div>
    <div class="author-box">
      <el-image
        class="author-image"
        fit="cover"
        :src="avatar != null && avatar != '' ? avatar : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
      >
        <template #error>
          <el-icon class="c-[--el-color-primary]" :size="180">
            <CircleCloseFilled />
          </el-icon>
        </template>
      </el-image>
    </div>
    <div class="<md:hidden">
      <div class="author-tag-right">
        <span class="author-tag">@为热爱而生 ⛅️</span>
        <span class="author-tag">@崇尚自由 👻</span>
        <span class="author-tag">二次元动漫 ☃️</span>
        <span class="author-tag">人不狠话超多 💌</span>
      </div>
    </div>
    <div class="image-dot"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const avatar = ref("https://i.postimg.cc/525fVZQr/YXT.jpg");

const handleKoiAdmin = () => {
  window.open("https://gitee.com/BigCatHome/Koi-Admin", "_blank");
};
const handleKoiBlog = () => {
  window.open("https://gitee.com/BigCatHome/koi-ui", "_blank");
};
</script>

<style scoped>
.author-main {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
}

.author-tag-left {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 30px;
}

.author-tag-left .author-tag:first-child,
.author-tag-left .author-tag:last-child {
  margin-right: -16px;
}

.author-tag:nth-child(1) {
  animation-delay: 0s;
}

.author-tag:nth-child(2) {
  animation-delay: 0.6s;
}

.author-tag:nth-child(3) {
  animation-delay: 1.2s;
}

.author-tag:nth-child(4) {
  animation-delay: 1.8s;
}

.author-tag {
  transform: translate(0, -4px);
  padding: 5px 26px;
  color: #303536;
  background: rgba(255, 253, 253, 0.67);
  border: 2px dashed var(--el-color-primary-light-3);
  border-radius: 40px;
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 5px 12px -5px rgba(102, 68, 68, 0);
  animation: 6s ease-in-out 0s infinite normal none running floating;
  @apply dark:text-#FFF dark:bg-[rgba(0,0,0,0.3)] dark:hover:text-[--el-color-primary] hover:border-[--el-color-primary] hover:text-[--el-color-primary];
}

@keyframes floating {
  0% {
    transform: translate(0, -5px);
  }

  50% {
    transform: translate(0, 5px);
  }

  100% {
    transform: translate(0, -5px);
  }
}

.author-box {
  position: relative;
  width: 190px;
  height: 190px;
  background: rgba(253, 253, 253, 0.8);
  @apply dark:bg-[rgba(0,0,0,0.3)] hover:border-[--el-color-primary];
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--el-color-primary-light-5);
}

.author-box::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: conic-gradient(transparent, transparent, transparent, #8758ff);
  animation: animate 4s linear infinite;
  animation-delay: -2s;
}

.author-box span {
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  background: rgba(253, 253, 253, 0.8);
  z-index: 1;
}

.author-image {
  border-radius: 50%;
  overflow: hidden;
  width: 180px;
  height: 180px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.67);
}

.author-box::after {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: conic-gradient(transparent, transparent, transparent, #06a6f0);
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.author-tag-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
}

.author-tag-right .author-tag:first-child,
.author-tag-right .author-tag:last-child {
  margin-left: -16px;
}

.author-main .image-dot {
  width: 18px;
  height: 18px;
  background: #6bdf8f;
  position: absolute;
  border-radius: 50%;
  border: 6px solid rgba(253, 253, 253, 0.9);
  top: 55%;
  left: 50%;
  z-index: 20;
  transform: translate(51px, 54px);
}
</style>
