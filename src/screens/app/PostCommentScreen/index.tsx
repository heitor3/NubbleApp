import { FlatList, ListRenderItemInfo } from "react-native";
import { Screen } from "../../../components/Screen";
import { usePostCommentList } from "../../../domain/Post/PostComment/useCases/usePostCommentList";
import { AppScreenProps } from "../../../routes/navigationType";
import { PostComment } from "../../../domain/Post/PostComment/postCommentTypes";
import { PostCommentItem } from "./components/PostCommentItem";
import { PostCommentBottom } from "./components/PostCommentBottom";
import { useAppSafeArae } from "../../../hooks/useAppSafeArea";
import { Box } from "../../../components/Box";
import { PostCommentTextMessage } from "./components/PostCommentTextMessage";
import { useUser } from "../../../domain/Auth/hooks/useUser";

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthorId;
  const { data, fetchNextPage, hasNextPage, refresh } = usePostCommentList(postId);
  const { id } = useUser();
  const { bottom } = useAppSafeArae();

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem postComment={item} onRemoveComment={refresh} userId={id} postAuthorId={postAuthorId} />
    )
  }



  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data} renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom }}
          ListFooterComponent={
            <PostCommentBottom fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
          }
        />
        <PostCommentTextMessage postId={postId} onAddComment={refresh} />
      </Box>
    </Screen>
  )
}