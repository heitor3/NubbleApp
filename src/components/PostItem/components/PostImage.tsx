import { Image, Dimensions } from "react-native";
import { Post } from "../../../domain/Post/postTypes";

type Props = Pick<Post, 'imageURL'>;

export function PostImage({ imageURL }: Props) {
  return (
    <Image
      resizeMode="cover"
      source={{ uri: imageURL }}
      style={{ width: Dimensions.get('screen').width, height: 300, marginHorizontal: -24 }}
    />
  );
}