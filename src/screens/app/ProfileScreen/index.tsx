import { RefreshControl, ScrollView } from "react-native";
import { ActivityIndicator } from "../../../components/ActivityIndicator";
import { Box } from "../../../components/Box";
import { ProfileAvatar } from "../../../components/ProfileAvatar";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { useUserGetById } from "../../../domain/User/useCase/useUserGetById";
import { AppScreenProps } from "../../../routes/navigationType";



export function ProfileScreen({ route }: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const { isError, isLoading, user, refetch, isFetching } = useUserGetById(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView style={{ flex: 1 }}
          refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}
        >
          <Box alignItems="center" flex={1}>
            <ProfileAvatar
              imageURL={user.profileUrl}
              size={64}
              borderRadius={24}
            />
            <Text preset="headingMedium" bold>
              {user.fullName}
            </Text>
            <Text>@{user.username}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  );
}