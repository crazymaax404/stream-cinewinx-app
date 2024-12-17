import { ScrollViewProps as ReactScrollViewProps } from 'react-native';

export interface ScrollViewProps extends ReactScrollViewProps {
  onRefresh?: () => void;
  isRefreshing?: boolean;
  disableRefresh?: boolean;
  refreshTimeout?: number;
}
