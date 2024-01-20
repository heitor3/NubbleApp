import { Box } from "../../Box";
import { Text } from "../../Text";
import { Post } from "../../../domain/Post/postTypes";
import { ProfileAvatar } from "../../ProfileAvatar";


type Props = Pick<Post, 'author'>;

export function PostHeader({ author }: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text ml="s12" preset="paragraphMedium" semiBold>
        {author.name}
      </Text>
    </Box>
  );
}