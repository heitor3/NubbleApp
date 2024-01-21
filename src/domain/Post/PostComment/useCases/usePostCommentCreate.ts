import { postCommentService } from "../postCommentService";
import { PostComment } from "../postCommentTypes";
import { MutationOptions, useMutation } from "../../../../infra/hooks/useMutation";

export function usePostCommentCreate(postId: number, options?: MutationOptions<PostComment>) {
  const { mutate, error, loading } = useMutation<{ message: string }, PostComment>(
    ({ message }) => postCommentService.create(postId, message),
    options
  );

  async function createComment(message: string) {

    return await mutate({ message });
  }

  return {
    createComment,
    loading,
    error,
  }
}