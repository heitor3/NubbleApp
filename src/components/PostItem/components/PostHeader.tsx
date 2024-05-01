import { Box } from "../../Box";
import { Text } from "../../Text";
import { Post } from "../../../domain/Post/postTypes";
import { ProfileAvatar } from "../../ProfileAvatar";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";


type Props = Pick<Post, 'author'>;

export function PostHeader({ author }: Props) {
  const navigation = useNavigation();

  function navigateTpProfile() {
    navigation.navigate('ProfileScreen', { userId: author.id });
  }

  return (
    <Pressable onPress={navigateTpProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}