import React from 'react';
import { View } from 'react-native';

import { Typography } from '../Typography';
import { TagProps } from './tag.interfaces';
import { useTagStyles } from './tag.styles';
import { isHexadecimal } from '@utils/is-hexadecimal';

const Tag = ({
  content,
  isSelected = false,
  variant = 'filled',
  color,
  style,
  ...rest
}: TagProps) => {
  const { styles } = useTagStyles(
    variant,
    isHexadecimal(color) ? color : undefined,
    isSelected
  );

  return (
    <View style={[{ flexDirection: 'row' }, style]} {...rest}>
      <View style={styles.container}>
        <Typography style={styles.text} numberOfLines={1}>
          {content}
        </Typography>
      </View>
    </View>
  );
};

export { Tag };
