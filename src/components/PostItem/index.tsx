import { Box } from "../Box";
import { Post } from "../../domain/Post/postTypes";
import { PostHeader } from "./components/PostHeader";
import { PostImage } from "./components/PostImage";
import { PostActions } from "./components/PostActions";
import { PostBottom } from "./components/PostBottom";

interface Props {
  post: Post
}


export function PostItem({ post }: Props) {


  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions reactionCount={post.reactionCount} commentCount={post.commentCount} favoriteCount={post.favoriteCount} />
      <PostBottom author={post.author} commentCount={post.commentCount} text={post.text} />
    </Box>
  );
}