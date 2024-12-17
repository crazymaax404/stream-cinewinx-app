import { ScrollView } from '@components/atoms/ScrollView';
import { Typography } from '@components/atoms/Typography';
import { PostCard } from '@components/molecules/PostCard';
import { spacings } from '@design/spacings';
import { usePosts } from '@hooks/use-posts';
import { IPost } from '@interfaces/post.interfaces';
import { router, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { XStack } from 'tamagui';

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();
  const { state, isLoading, error, refetch } = usePosts({
    params: { per_page: 10 },
  });

  console.log(state, 'state');

  const handleNavigate = data => {
    router.push({
      pathname: '/home/post',
      params: { data: JSON.stringify(data) },
    });
  };

  const renderPostItem = (data: IPost) => {
    return (
      <PostCard
        imageUrl={data.image_url}
        onPress={() => handleNavigate(data)}
        style={{ marginTop: spacings.regular }}
      />
    );
  };

  return (
    <ScrollView onRefresh={refetch} style={{ marginTop: spacings.huge * 3 }}>
      <Typography variant="title" fontWeight="bold">
        {t('home:trending')}:
      </Typography>
      <ScrollView horizontal disableRefresh>
        <XStack gap={spacings.regular}>{state?.map(renderPostItem)}</XStack>
      </ScrollView>
    </ScrollView>
  );
}
