import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView as ReactScrollView } from 'react-native';

import { ScrollViewProps } from './scrollView.interfaces';
import { useScrollViewStyles } from './scrollView.styles';

export const ScrollView = ({
  children,
  isRefreshing = false,
  disableRefresh = false,
  onRefresh = () => {},
  ...rest
}: ScrollViewProps) => {
  const { styles } = useScrollViewStyles();

  return (
    <ReactScrollView
      refreshControl={
        disableRefresh ? undefined : (
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            colors={[styles.refreshControl.color]}
            tintColor={styles.refreshControl.color}
            progressBackgroundColor={styles.refreshControl.backgroundColor}
          />
        )
      }
      {...rest}
    >
      {children}
    </ReactScrollView>
  );
};
