import { Alert, Pressable } from "react-native";
import { Box } from "../../../../components/Box";
import { ProfileAvatar } from "../../../../components/ProfileAvatar";
import { Text } from "../../../../components/Text";
import { PostComment } from "../../../../domain/PostComment/postCommentTypes";
import { usePostCommentRemove } from "../../../../domain/PostComment/useCases/usePostCommentRemove";
import { postCommentService } from "../../../../domain/PostComment/postCommentService";
import { useToastService } from "../../../../service/toast/useToast";

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}

export function PostCommentItem({ postComment, onRemoveComment, postAuthorId, userId }: Props) {
  const { showToast } = useToastService();
  const { mutate } = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment()
      showToast({ message: 'Comentário deletado' })
    }
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(userId, postComment, postAuthorId)

  function confirmeRemove() {
    Alert.alert('Deseja excluir o comentário?', 'Precione confirmar', [
      {
        text: "Confirmar",
        onPress: () => mutate({ postCommentId: postComment.id })
      },
      {
        text: "Cancelar",
        style: 'cancel'
      }
    ])
  }

  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmeRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>{postComment.author.name}</Text>
          <Text preset="paragraphSmall" color="gray1">{postComment.message} - {postComment.createdAtRelative}</Text>
        </Box>
      </Box>
    </Pressable>
  );
}