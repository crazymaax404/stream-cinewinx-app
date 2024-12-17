import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

export type TagVariants = 'outlined' | 'filled';

export interface TagProps extends ViewProps {
  content: string | number | ReactElement;
  color?: string;
  variant?: TagVariants;
  isSelected?: boolean;
}

export type TagContainerProps = Pick<TagProps, 'color'>;
