import { ActivityIndicator } from "../../../../components/ActivityIndicator";
import { Box } from "../../../../components/Box";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";


interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({ error, loading, refetch }: Props) {

  let component = (
    <Text bold preset="paragraphMedium">Não há publicações no seu feed</Text>
  );

  if (loading) {
    component = (
      <ActivityIndicator color="primary" />
    );
  }

  if (error) {
    component = (
      <>
        <Text mb="s16" bold preset="paragraphMedium">Não foi possével carregar o feed 😔</Text>
        <Button title="Recarregar" preset="outline" onPress={refetch} />
      </>
    );
  }


  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}