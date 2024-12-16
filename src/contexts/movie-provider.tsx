import { useMutation } from '@tanstack/react-query';
import {
  type ReactNode,
  createContext,
  useContext,
  useCallback,
  useState,
} from 'react';

import type { AuthValidator } from '../validations/auth';
import { IUser } from '../models/user-DTO';
import { mmkvStorage } from '../storage/mmkvStorage';
import { signInAPi } from '@apis/auth/sign-in';
import { getPostsAPI } from '@apis/movies/movies';

export const MovieContext = createContext<{
  getMovies: any;
  status: 'idle' | 'pending' | 'success' | 'error';
  error: Error | null;
  movies: IUser | null;
} | null>(null);

export default function MovieProvider({ children }: { children: ReactNode }) {
  const { getItem, containsItem, removeItem, setItem } = mmkvStorage;
  const [movies, setMovies] = useState<IUser | null>(null);

  const {
    mutateAsync: getMovies,
    status,
    error,
  } = useMutation({
    mutationKey: ['movies'],
    mutationFn: async data => {
      const response = await getPostsAPI(data);
      console.log(response, 'response');
      setMovies(response);
      return { response };
    },
  });

  return (
    <MovieContext.Provider
      value={{
        getMovies,
        status,
        error,
        movies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export const useMovie = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error('useMovie must be used within a MovieProvider');
  }

  return context;
};
