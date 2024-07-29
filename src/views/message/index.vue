<template>
  <Danmaku ref="danmusRef" :danmus="danmusList" useSlot useSuspendSlot loop :channels="6" class="w-100% h-256px m-t-6px">
    <template #dm="{ danmu }">
      <div class="flex justify-center bg-[rgba(0,0,0,0.5)] p-l-2px p-r-10px p-y-1px rounded-22px">
        <el-image
          :src="danmu.avatar"
          fit="cover"
          class="w-23px h-23px rounded-full border-solid border-2px border-[--el-color-primary-light-6]"
        >
          <template #error>
            <el-image
              src="https://pic4.zhimg.com/v2-702a23ebb518199355099df77a3cfe07_b.webp"
              fit="cover"
              class="w-23px h-23px rounded-full border-solid border-2px border-[--el-color-primary-light-6]"
            ></el-image>
          </template>
        </el-image>
        <div class="m-l-5px text-14px text-white">{{ danmu.content }}</div>
      </div>
    </template>
  </Danmaku>
  <div class="flex justify-center items-center w-100%">
    <div
      class="w-1200px m-t-10px bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(0,0,0,0.3)] rounded-20px border-2px border-dashed border-#767676 hover:border-[--el-color-primary] m-x-36px"
    >
      <div class="flex flex-col justify-center items-center m-t-16px w-100%">
        <div class="text-40px text-#111 dark:text-#D8D8D8 <sm:text-26px">留言板</div>
        <div class="text-14px text-#111 dark:text-#D8D8D8 m-t-6px">想说的·想问的·吐槽·交流</div>
        <KoiUploadImage v-model:imageUrl="messageForm.avatar" action="/koi/file/uploadBlogFile" class="m-t-16px">
          <template #content>
            <el-icon><Avatar /></el-icon>
            <span>请上传头像</span>
          </template>
        </KoiUploadImage>
        <input
          class="m-t-16px outline-none p-10px border-dashed hover:border-[--el-color-primary] rounded w-60%"
          type="text"
          v-model="messageForm.avatar"
          placeholder="请输入头像地址"
        />
        <input
          class="m-t-16px outline-none p-10px border-dashed hover:border-[--el-color-primary] rounded w-60%"
          type="text"
          v-model="messageForm.friendName"
          placeholder="请输入昵称"
        />
        <textarea
          class="m-t-16px outline-none p-10px border-2px border-dashed rounded hover:border-[--el-color-primary] w-60% h-300px text-16px"
          v-model="messageForm.content"
          placeholder="请输入留言内容"
        />
        <button
          class="m-y-16px w-200px h-36px bg-[--el-color-primary] border-2px border-solid border-transparent text-center hover:border-gray-2 rounded-25px font-bold text-14px uppercase hover:bg-[--el-color-primary-light-1] text-white duration-150"
          @click="handleSubmit"
        >
          提&emsp;交
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="messagePage">
import { ref, onMounted } from "vue";
import { ElLoading } from "element-plus";
import { koiMsgWarning, koiNoticeSuccess, koiNoticeError } from "@/utils/koi.ts";
import { add, list } from "@/api/blog/message/index.ts";
// @ts-ignore
import Danmaku from 'danmaku-vue';

const messageForm = ref({
  friendName: "",
  avatar: "",
  content: ""
});

/** 重置表单 */
const resetMessageForm = () => {
  messageForm.value = {
    friendName: "",
    avatar: "",
    content: ""
  };
};

/** 提交 */
const handleSubmit = async () => {
  if(messageForm.value.friendName.length == 0 || messageForm.value.avatar.length == 0 || messageForm.value.content.length == 0){
    koiMsgWarning("请填写完整信息🌻");
    return;
  }
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  try {
    await add(messageForm.value);
    koiNoticeSuccess("留言成功🌻");
    resetMessageForm();
    handleList();
    loading.close();
  } catch (error) {
    console.log(error);
    loading.close();
    koiNoticeError("留言失败，请刷新重试🌻");
  }
};

// danmusList 默认必须有值
const danmusRef = ref();
const danmusList = ref(["帅帅帅"]);
/** 留言数据查询 */
const handleList = async () => {
  try {
    // 重置数据
    danmusList.value = [];
    const res: any = await list();
    // 只需要弹幕的话
    // danmusList.value = res.data.map((item: any) => { return item.content });
    danmusList.value = res.data;
  } catch (error) {
    console.log(error);
    koiNoticeError("数据查询失败，请刷新重试🌻");
  }
};

onMounted(() => {
  handleList();
});
</script>

<style scoped></style>
