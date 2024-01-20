import { Image } from "react-native";

interface PropfileProps {
  imageURL: string;
  /**@default 32 */
  size?: number;
  /**@default 14 */
  borderRadius?: number;
}

export function ProfileAvatar({ imageURL, size = 32, borderRadius = 14 }: PropfileProps) {
  return (
    <Image source={{ uri: imageURL }} style={{ width: size, height: size, borderRadius: borderRadius }} />
  );
}