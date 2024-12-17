import { ScrollView } from '@components/atoms/ScrollView';
import { Tag } from '@components/atoms/Tag';
import { Typography } from '@components/atoms/Typography';
import { PostCard } from '@components/molecules/PostCard';
import { spacings } from '@design/spacings';
import { usePosts } from '@hooks/use-posts';
import { IPost } from '@interfaces/post.interfaces';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Image, XStack } from 'tamagui';

export default function Post() {
  const { t } = useTranslation();
  const { data } = useLocalSearchParams<{ data: string }>();

  const postData = data ? JSON.parse(data) : {};
  console.log(postData, 'postData');

  const { title, synopsis, genres } = postData.parsed_content;

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
      <Typography>{synopsis}</Typography>
      {genres && (
        <XStack
          gap={spacings.regular}
          style={{ marginVertical: spacings.regular }}
        >
          {genres.map((genre, index) => (
            <Tag key={index} content={genre} />
          ))}
        </XStack>
      )}
    </ScrollView>
  );
}
