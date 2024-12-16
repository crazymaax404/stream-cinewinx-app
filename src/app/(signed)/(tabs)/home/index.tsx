import { Typography } from '@components/atoms/Typography';
import { MovieCard } from '@components/molecules/MovieCard';
import { useMovie } from '@contexts/movie-provider';
import { spacings } from '@design/spacings';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'tamagui';

export default function Home() {
  const { t } = useTranslation();
  const { getMovies } = useMovie();

  const loadMovies = () => {
    getMovies();
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <View>
      <Typography variant="title">{t('home:trending')}</Typography>
      <MovieCard
        avatar="https://i.pinimg.com/736x/0b/0d/4c/0b0d4cf5c497566defb97a10d81526f5.jpg"
        description="Filmaço"
        title="Um filme top"
        style={{ marginTop: spacings.regular }}
      />
    </View>
  );
}
