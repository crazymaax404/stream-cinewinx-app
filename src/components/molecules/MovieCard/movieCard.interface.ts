import { ViewProps } from 'react-native';

export interface IMovieCardProps extends ViewProps {
  avatar: string;
  title: string;
  description: string;
}
