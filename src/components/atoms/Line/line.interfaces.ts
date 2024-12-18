import { ViewProps } from 'react-native';

export type LineOrientation = 'vertical' | 'horizontal';

export interface LineProps extends ViewProps {
  orientation?: LineOrientation;
  color?: string;
  size?: number;
}
