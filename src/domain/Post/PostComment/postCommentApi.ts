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

async function create(post_id: number, message: string): Promise<PostCommentAPI> {
  const response = await apiConfig.post<PostCommentAPI>('user/post_comment', {
    post_id, message
  });

  return response.data
}

async function remove(postCommentId: number): Promise<{ message: string }> {
  const response = await apiConfig.delete<{ message: string }>(`user/post_comment/${postCommentId}`)

  return response.data
}

export const postCommentApi = {
  getList,
  create,
  remove
}