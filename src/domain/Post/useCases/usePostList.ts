import { usePaginatedList } from "../../../infra/hooks/usePaginatedList";
import { QueryKeys } from "../../../infra/infraTypes";
import { postService } from "../postService";
import { Post } from "../postTypes";

export function usePostList() {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.getList)
}