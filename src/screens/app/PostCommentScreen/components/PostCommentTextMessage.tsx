import { useState } from "react";
import { TextMessage } from "../../../../components/TextMessage";
import { usePostCommentCreate } from "../../../../domain/PostComment/useCases/usePostCommentCreate";
import { Keyboard } from "react-native";

interface Props {
  postId: number;
  onAddComment: () => void;
}

export function PostCommentTextMessage({ postId, onAddComment }: Props) {
  const [message, setMessage] = useState("");
  const { createComment } = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
      onAddComment();
    }
  });

  return (
    <TextMessage
      value={message}
      onChangeText={setMessage}
      onPressSend={createComment}
    />
  );
}