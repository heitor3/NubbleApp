import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Box, TouchableOpacityBox } from '../components/Box';
import { Text } from '../components/Text';
import { Icon } from '../components/Icon';
import { mapScreenToProps } from './mapScreenToProps';
import { AppTabBottomTabParamList } from './AppTabNavigatior';
import { useAppSafeArae } from '../hooks/useAppSafeArea';
import { $shadowProps } from '../theme';


export function AppTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { navigate } = navigation;
  const { bottom } = useAppSafeArae();

  return (
    <Box paddingTop='s12' backgroundColor='background' flexDirection='row' style={[{ paddingBottom: bottom }, $shadowProps]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabItem = mapScreenToProps[route.name as keyof AppTabBottomTabParamList]

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigate({ name: route.name, params: route.params, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={Math.random()}
            activeOpacity={1}
            alignItems='center'
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused} />
            <Text semiBold preset='paragraphCaption' marginTop='s4'>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}