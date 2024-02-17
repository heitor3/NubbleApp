import { MutationOptions, useMutation } from "../../../infra/hooks/useMutation";
import { postCommentService } from "../postCommentService";



export function usePostCommentRemove(options?: MutationOptions<string>) {
  return useMutation<{ postCommentId: number }, string>(
    ({ postCommentId }) => postCommentService.remove(postCommentId),
    options,
  );
}