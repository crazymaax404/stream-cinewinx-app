import { StyleSheet } from 'react-native';

import { LineOrientation } from './line.interfaces';
import { useTheme } from '@contexts/theme-provider';

type LineStyles = {
  size: number;
  orientation: LineOrientation;
  color?: string;
};

export const useLineStyles = ({ orientation, size, color }: LineStyles) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: orientation === 'horizontal' ? '100%' : size,
      height: orientation === 'vertical' ? '100%' : size,
      backgroundColor: color || colors.hoverColor,
    },
  });

  return { styles };
};
