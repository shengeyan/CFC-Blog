
// 导入二次封装axios
import koi from "@/utils/axios.ts";

// 统一管理接口
enum API {
  LIST_TYPE = "/blog/blogType/listType",
  LIST_TYPE_ALL = "/blog/blogType/listTypeAll",
  LIST_EL_SELECT = "/blog/blogType/listElSelect"
}

// 首页文章分类查询
export const listType = () => {
  return koi.get(API.LIST_TYPE);
};

// 文章分类查询
export const listTypeAll = () => {
  return koi.get(API.LIST_TYPE_ALL);
};

// 查询文章标签
export const typeElSelect = () => {
  return koi.get(API.LIST_EL_SELECT);
};
