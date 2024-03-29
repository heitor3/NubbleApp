import { apiAdapter } from "../../api/apiAdapter";
import { Page } from "../../types/Page";
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

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI)
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);

  return response.message;

}
/**
* @description user can delete the comment if it is post author or comment author
* 
* @param userId the current session user id
* @param postComment comment to be deleted
* @param postAuthorId the id of the post author
 */
function isAllowToDelete(userId: number, postComment: PostComment, postAuthorId: number): boolean {
  if (postComment.author.id === userId) return true

  if (postAuthorId === userId) return true

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete
};