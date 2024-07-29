<template>
  <div class="author-main">
    <div class="author-content">
      <div class="author-box">
        <img
          class="author-image"
          fit="cover"
          src="https://foruda.gitee.com/avatar/1710744828463301493/5734968_bigcathome_1710744828.png!avatar200"
        >
        </img>
      </div>
      <div class="m-t-18px text-26px chroma-text">欢迎来到Crazy For Code</div>
      <div class="m-t-6px text-20px chroma-text">正在加载系统资源...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  width: 100vw;
  height: 100vh;
}

.author-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
