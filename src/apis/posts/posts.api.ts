import { APIResponse } from '@interfaces/axios-response.dto';
import { IPostsAPI } from '@interfaces/post.interfaces';
import api from '@services/api';

export const listPostsAPI = (data: {
  per_page: number;
  offset_id: number;
}): APIResponse<IPostsAPI> => api.get('/api/v1/posts', { params: data });
