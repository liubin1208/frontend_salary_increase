import { request } from '../request';

export function download(onProgress) {
  return request({
    onProgress: onProgress,
    url: 'http://localhost:9527/data',
  });
}
