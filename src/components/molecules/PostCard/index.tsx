import React from 'react';
import { IPostCardProps } from './postCard.interface';
import { Image, View } from 'tamagui';

export const PostCard = ({
  imageUrl,
  ...rest
}: IPostCardProps) => {
  return (
    <View
      borderWidth={1}
      borderRadius={8}
      borderColor={'$borderColor'}
      {...rest}
    >
      {imageUrl && (
        <Image
          source={{
            uri: imageUrl,
            width: 130,
            height: 180,
          }}
          style={{
            borderRadius: 8,
          }}
        />
      )}
    </View>
  );
};
