import { apiConfig } from "../../../api/apiConfig";
import { PageAPI, PageParams } from "../../../api/apiTypes";
import { PostCommentAPI } from "./postCommentTypes";


async function getList(post_id: number, pageParams?: PageParams): Promise<PageAPI<PostCommentAPI>> {
  const response = await apiConfig.get<PageAPI<PostCommentAPI>>("user/post_comment", {
    params: {
      post_id,
      ...pageParams
    },
  });
  return response.data;
}

export const postCommentApi = {
  getList,
}