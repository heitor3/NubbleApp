import { Box } from "../Box";
import { Post } from "../../domain/Post/types";
import { PostHeader } from "./components/PostHeader";
import { PostImage } from "./components/PostImage";
import { PostActions } from "./components/PostActions";

interface Props {
  post: Post
}


export function PostItem({ post }: Props) {


  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions reactionCount={post.reactionCount} commentCount={post.commentCount} favoriteCount={post.favoriteCount} />
    </Box>
  );
}