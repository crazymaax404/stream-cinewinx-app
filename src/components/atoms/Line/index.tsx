import { View } from 'react-native';
import { LineProps } from './line.interfaces';
import { useLineStyles } from './line.styles';

const Line = ({
  orientation = 'horizontal',
  style,
  color,
  size = 2,
}: LineProps) => {
  const { styles } = useLineStyles({
    orientation,
    size,
    color,
  });

  return <View style={[styles.container, style]} />;
};

export { Line };
