import { listPostsAPI } from '@apis/posts/posts.api';
import { IPost } from '@interfaces/post.interfaces';
import { useInfiniteQuery } from '@tanstack/react-query';

export const usePosts = ({ params }) => {
  const { data, error, isLoading, refetch } = useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const data = {
          ...params,
          page: pageParam,
        };
        const response = await listPostsAPI(data);
        console.log(response, 'response api');
        return response.data;
      } catch (error) {
        console.error(`posts - Error: `, error);
        throw error;
      }
    },
    queryKey: ['posts'],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    networkMode: 'offlineFirst',
    enabled: true,
    staleTime: 10 * 60 * 1000,
    gcTime: Infinity,
    retry: 2,
  });

  const state = data?.pages.flatMap(page => page.data);

  return { state, isLoading, error, refetch };
};
