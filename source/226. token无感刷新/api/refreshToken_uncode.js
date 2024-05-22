import request from './request';
import { getRefreshToken } from './token';
export function refreshToken() {
  console.log('刷新token');
  request.get('/refresh_token', {
    headers: {
      Authorization: `Bearer ${getRefreshToken()}`,
    },
  });
}
