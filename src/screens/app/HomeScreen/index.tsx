import { Screen } from "../../../components/Screen";
import { AppTabScreenProps } from "../../../routes/navigationType";
import { Post } from "../../../domain/Post/postTypes";
import { FlatList, ListRenderItemInfo, RefreshControl } from "react-native";
import { PostItem } from "../../../components/PostItem";
import { HomeHeader } from "./components/HomeHeader";
import { HomeEmpty } from "./components/HomeEmpty";
import { usePostList } from "../../../domain/Post/useCases/usePostList";
import React from "react";
import { useScrollToTop } from "@react-navigation/native";


export function HomeScreen({ }: AppTabScreenProps<'HomeScreen'>) {
  const { isError, isLoading, list, refresh, fetchNextPage } = usePostList();

  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef)

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return (
      <PostItem post={item} />
    )
  }

  return (
    <Screen style={{ flex: 1, paddingTop: 0, paddingBottom: 0, paddingHorizontal: 0 }}>
      <FlatList
        ref={flatListRef}
        ListHeaderComponent={<HomeHeader />}
        showsVerticalScrollIndicator={false}
        data={list}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refresh} />}
        refreshing={isLoading}
        contentContainerStyle={{ flex: list.length === 0 ? 1 : undefined }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<HomeEmpty refetch={refresh} loading={isLoading} error={isError} />}
      />
    </Screen>
  )
}