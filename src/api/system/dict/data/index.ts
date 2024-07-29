// 导入二次封装axios
import koi from "@/utils/axios.ts";

// 统一管理接口
enum API {
  LIST_DATA_BY_TYPE = "/koi/sysDictData/listDataByType"
}

// 根据字典类型查询数据
export const listDataByType = (dictType: any) => {
  return koi.get(API.LIST_DATA_BY_TYPE + "/" + dictType); // 第一种传参方式
};
