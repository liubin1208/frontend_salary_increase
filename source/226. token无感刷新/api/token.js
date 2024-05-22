import request from './request';

const TOKEN_KEY = 'TOKEN';
const REFRESH_TOKEN_KEy = 'REFRESH_TOKEN';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEy);
}

export function setRefreshToken(token) {
  localStorage.setItem(REFRESH_TOKEN_KEy, token);
}
