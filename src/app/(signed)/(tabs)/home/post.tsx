import React from 'react';

import { Line } from '@components/atoms/Line';
import { ScrollView } from '@components/atoms/ScrollView';
import { Tag } from '@components/atoms/Tag';
import { Typography } from '@components/atoms/Typography';
import { spacings } from '@design/spacings';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image, XStack } from 'tamagui';
import { LanguageFlags } from '@components/atoms/LanguageFlags';
import { Button } from '@components/atoms';

export default function Post() {
  const { t } = useTranslation();
  const { data } = useLocalSearchParams<{ data: string }>();

  const postData = data ? JSON.parse(data) : {};
  console.log(postData, 'postData');

  const { title, synopsis, genres, cast, release_date, languages } =
    postData.parsed_content;

  return (
    <ScrollView style={{ marginTop: spacings.huge }}>
      <Image source={{ uri: postData.image_url }} style={{ height: 260 }} />
      <Typography
        variant="title"
        fontWeight="bold"
        style={{ marginVertical: spacings.regular }}
      >
        {title}
      </Typography>
      <XStack alignItems="center" gap={spacings.small}>
        <Typography>{release_date}</Typography>
        <LanguageFlags languages={languages} />
      </XStack>
      <Button
        content={t('static:watch')}
        iconName="play"
        style={{ marginTop: spacings.regular }}
      />
      <Line
        style={{ marginBottom: spacings.regular, marginTop: spacings.small }}
      />
      {genres && (
        <XStack
          gap={spacings.regular}
          style={{ marginBottom: spacings.regular }}
        >
          {genres.map((genre, index) => (
            <Tag key={index} content={genre} />
          ))}
        </XStack>
      )}
      <Typography>{synopsis}</Typography>
      {cast && (
        <>
          <Typography
            variant="title"
            fontWeight="bold"
            style={{ marginVertical: spacings.regular }}
          >
            {t('static:cast')}
          </Typography>
          <ScrollView horizontal>
            <XStack
              gap={spacings.regular}
              style={{ marginBottom: spacings.regular }}
            >
              {cast.map((cast, index) => (
                <Tag key={index} content={cast} />
              ))}
            </XStack>
          </ScrollView>
        </>
      )}
    </ScrollView>
  );
}
