
// 导入二次封装axios
import koi from "@/utils/axios.ts";

// 统一管理接口
enum API {
  GET_CONTENT = "/blog/blogArticleContent/getArticleContentById",
}

// 博客首页多条件分页查询
export const getContent = (articleId: any) => {
  return koi.get(API.GET_CONTENT + "/" + articleId);
};



