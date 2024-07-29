
// 导入二次封装axios
import koi from "@/utils/axios";

// 统一管理接口
enum API {
  LIST = "/blog/blogFriend/listBlog",
}

// 查询友链数据
export const list = () => {
  return koi.get(API.LIST);
};

