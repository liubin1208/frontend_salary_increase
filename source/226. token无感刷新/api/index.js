import request from './request';

export function login() {
  return request.post('/login');
}

export function reqProtected() {
  return request.post('/protected');
}

export * from './refreshToken';
