import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
  SpacingShorthandProps
} from '@shopify/restyle';
import { Theme } from '../../theme';
import { TouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import React from 'react';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border,],
  TouchableOpacity
)