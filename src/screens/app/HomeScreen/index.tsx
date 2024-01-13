import { useEffect, useState } from "react";
import { Screen } from "../../../components/Screen";
import { AppTabScreenProps } from "../../../routes/navigationType";
import { postService } from "../../../domain/Post/postService";
import { Post } from "../../../domain/Post/postTypes";
import { FlatList, ListRenderItemInfo } from "react-native";
import { PostItem } from "../../../components/PostItem";
import { HomeHeader } from "./components/HomeHeader";
import { HomeEmpty } from "./components/HomeEmpty";


export function HomeScreen({ }: AppTabScreenProps<'HomeScreen'>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchData() {
    try {
      setError(null)
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (error) {
      console.log("Error ", error)
      setError(true)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return (
      <PostItem post={item} />
    )
  }

  return (
    <Screen style={{ flex: 1, paddingTop: 0, paddingBottom: 0, paddingHorizontal: 0 }}>
      <FlatList
        ListHeaderComponent={<HomeHeader />}
        showsVerticalScrollIndicator={false}
        data={postList}
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<HomeEmpty refetch={fetchData} loading={loading} error={error} />}
      />
    </Screen>
  )
}