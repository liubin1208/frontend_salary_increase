import request from './request';
import { getRefreshToken } from './token';
let promise;
export function refreshToken() {
  if (promise) {
    return promise;
  }
  promise = new Promise(async (resolve) => {
    console.log('刷新token');
    const resp = await request.get('/refresh_token', {
      headers: {
        Authorization: `Bearer ${getRefreshToken()}`,
      },
      __isRefreshToken: true,
    });
    resolve(resp.code === 0);
  });
  promise.finally(() => {
    promise = null;
  });
  return promise;
}

export function isRefreshRequest(config) {
  return !!config.__isRefreshToken;
}
