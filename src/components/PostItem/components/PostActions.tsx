import { Post } from "../../../domain/Post/types";
import { Box, TouchableOpacityBox } from "../../Box";
import { Icon, IconProps } from "../../Icon";
import { Text } from "../../Text";


interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  }
}

function Item({ icon, marked, onPress, text }: ItemProps) {
  return (
    <TouchableOpacityBox flexDirection="row" alignItems="center" mr="s24" onPress={onPress} mt="s16">
      <Icon color={marked ? "marked" : undefined} name={marked ? icon.marked : icon.default} />
      {text > 0 &&
        (<Text ml="s4" bold preset="paragraphSmall">{text}</Text>)
      }
    </TouchableOpacityBox>
  )
}


type Props = Pick<Post, 'favoriteCount' | 'commentCount' | 'reactionCount'>;

export function PostActions({ commentCount, favoriteCount, reactionCount }: Props) {

  function likePost() {

  }
  function navigateToComments() {

  }
  function favoritePost() {

  }

  return (
    <Box flexDirection="row">
      <Item marked={true} text={reactionCount} icon={{ default: 'heart', marked: 'heartFill' }} onPress={likePost} />
      <Item marked={false} text={commentCount} icon={{ default: 'comment', marked: 'comment' }} onPress={navigateToComments} />
      <Item marked={false} text={favoriteCount} icon={{ default: 'bookmark', marked: 'bookmarkFill' }} onPress={favoritePost} />
    </Box>
  );
}