import { Box } from "../../../../components/Box";
import { ProfileAvatar } from "../../../../components/ProfileAvatar";
import { Text } from "../../../../components/Text";
import { PostComment } from "../../../../domain/Post/PostComment/postCommentTypes";

interface Props {
  postComment: PostComment
}

export function PostCommentItem({ postComment }: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={postComment.author.profileURL} />
      <Box ml="s12" flex={1}>
        <Text preset="paragraphSmall" bold>{postComment.author.name}</Text>
        <Text preset="paragraphSmall" color="gray1">{postComment.message} - {postComment.createdAtRelative}</Text>
      </Box>
    </Box>
  );
}