import { Screen } from "../../../components/Screen";
import { AppTabScreenProps } from "../../../routes/navigationType";
import { Post } from "../../../domain/Post/postTypes";
import { FlatList, ListRenderItemInfo, RefreshControl } from "react-native";
import { PostItem } from "../../../components/PostItem";
import { HomeHeader } from "./components/HomeHeader";
import { HomeEmpty } from "./components/HomeEmpty";
import { usePostList } from "../../../domain/Post/useCases/usePostList";


export function HomeScreen({ }: AppTabScreenProps<'HomeScreen'>) {
  const { error, loading, postList, refresh, fetchNextPage } = usePostList();

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
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} />}
        refreshing={loading}
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<HomeEmpty refetch={refresh} loading={loading} error={error} />}
      />
    </Screen>
  )
}