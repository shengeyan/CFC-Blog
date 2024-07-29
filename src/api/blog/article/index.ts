
// 导入二次封装axios
import koi from "@/utils/axios.ts";

// 统一管理接口
enum API {
  LIST_PAGE = "/blog/blogArticle/listBlogPage",
  RECOMMEND = "/blog/blogArticle/recommend",
  NEWEST = "/blog/blogArticle/newest",
  MINE = "/blog/blogArticle/mine",
  PUBLISH = "/blog/blogArticle/publish",
  SEARCH = "/blog/blogArticle/search"
}

// 博客首页多条件分页查询
export const listPage = (params: any) => {
  return koi.get(API.LIST_PAGE, params);
};

// 博客首页最新推荐
export const listRecommend = () => {
  return koi.get(API.RECOMMEND);
};

// 博客首页热门推荐
export const listNewest = () => {
  return koi.get(API.NEWEST);
};

// 博客首页个人信息
export const getMine = () => {
  return koi.get(API.MINE);
};

// 博客发布文章
export const publish = (data: any) => {
  return koi.post(API.PUBLISH, data);
};

// 全局搜索
export const search = (articleTitle: any) => {
  return koi.get(API.SEARCH + "/" + articleTitle);
};



