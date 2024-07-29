<template>
  <div>
    <el-button size="small" type="primary" icon="Promotion" round @click="handlePublish">发布</el-button>
  </div>

  <!-- 添加 OR 修改 -->
  <KoiDialog
    ref="koiDialogRef"
    :title="title"
    :height="1000"
    :fullscreen="true"
    @koiConfirm="handleConfirm"
    @koiCancel="handleCancel"
    :footerHidden="true"
  >
    <template #header>
      <el-affix :offset="20" style="width: 100%">
        <div class="flex h-10">
          <!-- 靠右对齐 -->
          <div class="ml-auto flex">
            <el-button type="danger" @click="handleCancel"
              ><el-icon class="mr-1"><CircleClose></CircleClose></el-icon>取消</el-button
            >
            <el-button type="primary" @click="handleConfirm">
              <el-icon class="mr-1">
                <Promotion />
              </el-icon>
              发布
            </el-button>
          </div>
        </div>
      </el-affix>
    </template>
    <template #content>
      <el-form ref="formRef" :rules="rules" :model="form" label-width="80px" status-icon>
        <el-row>
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
            <el-form-item label="文章标题" prop="articleTitle">
              <el-input v-model="form.articleTitle" placeholder="请输入文章标题" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" class="p-l-10px">
            <el-form-item label="文章分类" prop="typeId">
              <el-select
                v-model="form.typeId"
                clearable
                filterable
                placeholder="请选择文章分类"
              >
                <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
            <el-form-item label="文章标签" prop="tagIds">
              <el-select
                v-model="form.tagIds"
                multiple
                collapse-tags
                collapse-tags-tooltip
                filterable
                clearable
                :multiple-limit="3"
                :max-collapse-tags="3"
                placeholder="请选择文章标签[最多三个]"
              >
                <el-option v-for="item in tagOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" class="p-l-10px">
            <el-form-item label="文章作者" prop="createBy">
              <el-input v-model="form.createBy" placeholder="请输入文章作者" clearable />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="{ span: 24 }">
            <el-form-item label="文章内容" prop="content">
              <!-- Markdown 编辑器 https://imzbf.github.io/md-editor-v3/zh-CN/docs 文档地址 -->
              <MdEditor
                v-model="form.content"
                :editorId="editorId"
                :theme="globalStore.isDark ? 'dark' : 'light'"
                :previewTheme="globalStore.previewTheme"
                :codeTheme="globalStore.codeTheme"
                @onUploadImg="handleUploadImage"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
            <el-form-item label="文章图片">
              <!-- 方形示例 -->
              <KoiUploadImage v-model:imageUrl="form.picture" action="/koi/file/uploadBlogFile" width="214px">
                <template #content>
                  <el-icon><Picture /></el-icon>
                  <span>请上传图片</span>
                </template>
                <template #tip>图片最大为 3M</template>
              </KoiUploadImage>
            </el-form-item>
          </el-col>
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" class="p-l-10px">
            <el-form-item label="图片地址" prop="picture">
              <el-input v-model="form.picture" :rows="5" type="textarea" placeholder="如使用图床，防止图片丢失，请输入图片地址" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
            <el-form-item label="排序" prop="sorted">
              <el-input-number v-model="form.sorted" clearable style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" class="p-l-10px">
            <el-form-item label="验证码" prop="securityCode">
              <el-input v-model="form.securityCode" placeholder="请输入邀请码[无需审核，直接发布]" clearable />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :xs="{ span: 24 }" :sm="{ span: 24 }">
            <el-form-item label="文章描述" prop="remark">
              <el-input v-model="form.remark" :rows="5" type="textarea" placeholder="请输入文章描述" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!-- {{ form }} -->
    </template>
  </KoiDialog>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { koiMsgError, koiMsgSuccess } from "@/utils/koi.ts";
import koi from "@/utils/axios.ts";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { tagElSelect } from "@/api/blog/tag/index.ts";
import { publish } from "@/api/blog/article/index.ts";
import { typeElSelect } from "@/api/blog/type/index.ts";
import { ElLoading } from "element-plus";
import useGlobalStore from "@/stores/modules/global.ts";
// import mittBus from "@/utils/mittBus.ts";

// 调用刷新接口
// const handleListPage = () => {
//   mittBus.emit("handleListPage");
// };
/** mdEditor明亮黑夜模式开始 */
const globalStore = useGlobalStore();
const editorId = ref("KOI-MD-EDITOR");
/** mdEditor明亮黑夜模式结束 */

/** 添加 AND 修改弹出框 */
const koiDialogRef = ref();
// form表单Ref
const formRef = ref<any>();

// form表单
let form = ref<any>({
  articleTitle: "",
  typeId: "",
  tagIds: [],
  content: "",
  picture: "",
  sorted: 666,
  securityCode: "",
  createBy: "",
  remark: ""
});

/** 清空表单数据 */
const resetForm = () => {
  form.value = {
    articleTitle: "",
    typeId: "",
    tagIds: [],
    content: "",
    picture: "",
    securityCode: "",
    sorted: 666,
    createBy: "",
    remark: ""
  };
};

/** 表单规则 */
const rules = reactive({
  articleTitle: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
  typeId: [{ required: true, message: "请选择文章分类", trigger: "blur" }],
  tagIds: [{ required: true, message: "请输入选择文章标签", trigger: "blur" }],
  createBy: [{ required: true, message: "请输入文章作者", trigger: "blur" }],
  picture: [{ required: true, message: "请输入图片地址", trigger: "blur" }],
  securityCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
  sorted: [{ required: true, message: "请输入排序序号", trigger: "blur" }],
  remark: [{ required: true, message: "请输入文章描述", trigger: "blur" }]
});

// 标签多选下拉框
const tagOptions = ref();
/** 多选下拉框 */
const handleTagElSelect = async () => {
  try {
    tagOptions.value = [];
    const res: any = await tagElSelect();
    tagOptions.value = res.data;
  } catch (error) {
    console.log(error);
    koiMsgError("级联数据查询失败，请重试🌻");
  }
};

// 类型多选下拉框
const typeOptions = ref();
const handleTypeElSelect = async () => {
  try {
    typeOptions.value = [];
    const res: any = await typeElSelect();
    typeOptions.value = res.data;
  } catch (error) {
    console.log(error);
    koiMsgError("级联数据查询失败，请重试🌻");
  }
}

const title = ref();
const handlePublish = () => {
  // 重置表单
  resetForm();
  // 标题
  title.value = "发布文章";
  koiDialogRef.value.koiOpen();
  handleTypeElSelect();
  handleTagElSelect();
};

/** 取消 */
const handleCancel = () => {
  koiDialogRef.value.koiClose();
};

/** 确认发布  */
const handleConfirm = () => {
  if (!formRef.value) return;
  (formRef.value as any).validate(async (valid: any) => {
    if (valid) {
      const loading = ElLoading.service({
        lock: true,
        text: "正在发布中...",
        background: "rgba(0, 0, 0, 0.7)"
      });
      try {
        // 发布文章
        await publish(form.value);
        koiMsgSuccess("发布成功🌻");
        loading.close();
        // 快速关闭
        koiDialogRef.value.koiQuickClose();
        // 刷新数据
        // handleListPage();
      } catch (error) {
        loading.close();
        console.log(error);
      }
    } else {
      koiMsgError("验证失败，请检查填写内容🌻");
    }
  });
};

/** MarkDown上传图片 */
const handleUploadImage = async (files: any, callback: any) => {
  // @ts-ignore
  const res = await Promise.all(
    files.map((file: any) => {
      // @ts-ignore
      return new Promise(async (rev: any, rej: any) => {
        console.log("==> 编辑器开始上传文件...");
        let formData = new FormData();
        formData.append("file", file);
        const res: any = await koi.post("/koi/file/uploadBlogFile/100/pictures", formData);
        // 调用 callback 函数，回显上传图片
        callback([import.meta.env.VITE_SERVER + res.data.fileUploadPath]);
      });
    })
  );
};
</script>

<style scoped>
/* markdown 脚部高度 */
:deep(.md-editor-footer) {
  height: 36px;
}
</style>
