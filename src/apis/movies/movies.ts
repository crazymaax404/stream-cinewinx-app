import api from '@services/api';

export const getPostsAPI = ({ search }: any): any =>
  api.post('/api/v1/posts', { search });
