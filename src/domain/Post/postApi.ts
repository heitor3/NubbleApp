import { apiConfig } from "../../api/apiConfig";
import { PageAPI } from "../../api/apiTypes";
import { PostAPI } from "./postTypes";


async function getList(): Promise<PageAPI<PostAPI>> {
  const response = await apiConfig.get<PageAPI<PostAPI>>("user/post");
  return response.data;
}

export const postApi = {
  getList,
}