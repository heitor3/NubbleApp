import { apiConfig } from "../../api/apiConfig";
import { PageAPI, PageParams } from "../../api/apiTypes";
import { PostAPI } from "./postTypes";


async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  const response = await apiConfig.get<PageAPI<PostAPI>>("user/post", {
    params,
  });
  return response.data;
}

export const postApi = {
  getList,
}