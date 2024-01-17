import { apiAdapter } from "../../../api/apiAdapter";
import { Page } from "../../../types/Page";
import { postCommentAdapter } from "./postCommentAdapter";
import { postCommentApi } from "./postCommentApi";
import { PostComment } from "./postCommentTypes";


async function getList(postId: number, page: number): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, { page, per_page: 10 });

  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta)
  }
}

export const postCommentService = {
  getList,
};