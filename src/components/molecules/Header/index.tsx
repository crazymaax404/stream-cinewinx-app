import React from 'react';
import { IHeaderProps } from './header.interface';
import { XStack } from 'tamagui';
import { Avatar, Button, Icon } from '@components/atoms';
import { useRouter } from 'expo-router';

export const Header = ({
  avatar,
  color,
  goBack,
  sideElements,
  ...rest
}: IHeaderProps) => {
  const router = useRouter();

  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      {...rest}
    >
      <XStack alignItems="center">
        {avatar && <Avatar src={avatar} />}
        {goBack && (
          <Button
            iconName="arrow-left"
            variant="transparent"
            onPress={router.back}
          />
        )}
      </XStack>
      {sideElements && <XStack>{sideElements}</XStack>}
    </XStack>
  );
};
