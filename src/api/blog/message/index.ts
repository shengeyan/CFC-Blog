// 导入二次封装axios
import koi from "@/utils/axios.ts";

// 统一管理接口
enum API {
  ADD = "/blog/blogMessage/blogAdd",
  LIST = "/blog/blogMessage/listBlog"
}

// 博客新增留言
export const add = (data: any) => {
  return koi.post(API.ADD, data);
};

// 博客展示留言
export const list = () => {
  return koi.get(API.LIST);
};
