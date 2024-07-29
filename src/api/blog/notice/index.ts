// 导入二次封装axios
import koi from "@/utils/axios.ts";

// 统一管理接口
enum API {
  LIST = "/blog/blogNotice/listBlog"
}

// 博客展示通知
export const list = () => {
  return koi.get(API.LIST);
};
