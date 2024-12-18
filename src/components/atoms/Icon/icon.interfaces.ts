import { StyleProp, TextStyle } from 'react-native';

export type IconNames =
  | 'alert-circle'
  | 'arrow-left'
  | 'bell'
  | 'cat'
  | 'home'
  | 'plus'
  | 'search'
  | 'user';

export interface IconProps {
  testID?: string;
  color?: string;
  name: IconNames;
  size?: number;
  style?: StyleProp<TextStyle>;
}
