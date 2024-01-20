import { useNavigation } from '@react-navigation/native';
import { Box } from '../../../components/Box'
import { Post } from '../../../domain/Post/postTypes';
import { Text } from '../../Text';


type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

export function PostBottom({ author, commentCount, text, id }: Props) {
  const { navigate } = useNavigation();

  const commentText = getCommentText(commentCount);

  function navigateToPostCommentScreen() {
    navigate("PostCommentScreen", {
      postId: id
    })
  }

  return (
    <Box mt='s16'>
      <Text preset='paragraphMedium' bold>{author.userName}</Text>
      <Text preset='paragraphMedium' color='gray1'>{text}</Text>
      {commentText &&
        (<Text onPress={navigateToPostCommentScreen} preset='paragraphSmall' bold color='primary' mt='s8'>{commentText}</Text>)
      }
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return "Ver comentario";
  } else {
    return `Ver ${commentCount} comentarios`
  }
}