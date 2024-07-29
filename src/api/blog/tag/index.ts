
// 导入二次封装axios
import koi from "@/utils/axios.ts";

// 统一管理接口
enum API {
  TAG_EL_SELECT = "/blog/blogTag/tagElSelectList",
  LIST_TAG = "/blog/blogTag/listTag"
}

// 发布-标签多选下拉框
export const tagElSelect = () => {
  return koi.get(API.TAG_EL_SELECT);
};

// 查询文章标签
export const listTag = () => {
  return koi.get(API.LIST_TAG);
};

