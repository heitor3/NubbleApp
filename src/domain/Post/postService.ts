import { apiAdapter } from '../../api/apiAdapter';
import { Page } from '../../types/Page';
import { postAdapter } from './postAdapter';
import { postApi } from './postApi';
import { Post } from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({ page, per_page: 10 });

  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta)
  }
}

export const postService = {
  getList,
};