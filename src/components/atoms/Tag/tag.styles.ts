import { transparentize } from 'polished';
import { StyleSheet } from 'react-native';

import { TagVariants } from './tag.interfaces';
import { useTheme } from '@contexts/theme-provider';
import { spacings } from '@design/spacings';

export const useTagStyles = (
  variant: TagVariants,
  color: string | undefined,
  isSelected: boolean
) => {
  const { colors } = useTheme();

  const baseColor = color || colors.primary;
  const lightenColor = transparentize(0.9, baseColor);
  const textColor = baseColor;

  const filledStyle = {
    borderRadius: 4,
    padding: spacings.tiny,
    paddingHorizontal: spacings.small,
    backgroundColor: isSelected ? baseColor : lightenColor,
  };

  const outlinedStyle = {
    ...filledStyle,
    borderColor: textColor,
    borderWidth: 1,
  };

  const getContainerStyle = () => {
    switch (variant) {
      case 'outlined':
        return outlinedStyle;

      default:
        return filledStyle;
    }
  };

  const getTextColorStyle = () => {
    switch (variant) {
      default:
        return textColor;
    }
  };

  const styles = StyleSheet.create({
    container: {
      ...getContainerStyle(),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: getTextColorStyle(),
    },
  });

  return { styles };
};
