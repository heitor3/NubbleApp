import { useEffect, useState } from "react";
import { Screen } from "../../../components/Screen";
import { AppTabScreenProps } from "../../../routes/navigationType";
import { postService } from "../../../domain/Post/postService";
import { Post } from "../../../domain/Post/types";
import { FlatList, ListRenderItemInfo } from "react-native";
import { PostItem } from "../../../components/PostItem";


export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const { navigate } = navigation;
  const [postlist, setPostlist] = useState<Post[]>([]);
  useEffect(() => {
    postService.getList().then(list => setPostlist(list))
  }, [])

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return (
      <PostItem post={item} />
    )
  }

  return (
    <Screen style={{ paddingTop: 0, paddingBottom: 0, paddingHorizontal: 0 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postlist}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Screen>
  )
}