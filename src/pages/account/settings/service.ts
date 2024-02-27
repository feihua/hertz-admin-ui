import { request } from 'umi';
import type { CurrentUser, UpdatePasswordParams} from './data';

export async function queryCurrent(params: { id: number }): Promise<{ data: CurrentUser }> {
  return request('/api/system/user/view', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updatePassword(params: UpdatePasswordParams) {
  return request('/api/system/user/updatePassword', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
