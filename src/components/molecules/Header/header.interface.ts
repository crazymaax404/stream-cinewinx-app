import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

export interface IHeaderProps extends ViewProps {
  avatar?: string;
  color?: string;
  sideElements?: ReactNode;
}
