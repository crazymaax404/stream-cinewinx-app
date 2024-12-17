import { useTheme } from '@contexts/theme-provider';
import { StyleSheet } from 'react-native';

export const useScrollViewStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    refreshControl: {
      color: colors.primary,
      backgroundColor: colors.surface,
    },
  });

  return { styles };
};
