import { ScrollView } from '@components/atoms/ScrollView';
import { Typography } from '@components/atoms/Typography';
import { MovieCard } from '@components/molecules/MovieCard';
import { spacings } from '@design/spacings';
import { usePosts } from '@hooks/use-posts';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = usePosts({
    params: { per_page: 10 },
  });

  console.log(data, 'data');

  return (
    <ScrollView onRefresh={refetch}>
      <Typography variant="title">{t('home:trending')}</Typography>
      <MovieCard
        avatar="https://i.pinimg.com/736x/0b/0d/4c/0b0d4cf5c497566defb97a10d81526f5.jpg"
        description="Filmaço"
        title="Um filme top"
        style={{ marginTop: spacings.regular }}
      />
    </ScrollView>
  );
}
