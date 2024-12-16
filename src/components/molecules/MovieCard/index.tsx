import React from 'react';
import { spacings } from '@design/spacings';
import { IMovieCardProps } from './movieCard.interface';
import { XStack, YStack } from 'tamagui';
import { Typography } from '@components/atoms/Typography';
import { Avatar } from '@components/atoms';

export const MovieCard = ({
  avatar,
  title,
  description,
  ...rest
}: IMovieCardProps) => {
  return (
    <YStack
      backgroundColor={'#e5e5e5'}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      padding={spacings.regular}
      borderRadius={8}
      {...rest}
    >
      {avatar && <Avatar src={avatar} />}
      {title && (
        <Typography style={{ marginLeft: spacings.small }}>{title}</Typography>
      )}
      {description && (
        <Typography style={{ marginLeft: spacings.small }}>
          {description}
        </Typography>
      )}
    </YStack>
  );
};
