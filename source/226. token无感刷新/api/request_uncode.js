import axios from 'axios';
import { setToken, setRefreshToken, getToken } from './token';
import { refreshToken } from './refreshToken';

const ins = axios.create({
  baseURL: 'http://localhost:9527',
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

ins.interceptors.response.use(async (res) => {
  if (res.headers.authorization) {
    const token = res.headers.authorization.replace('Bearer ', '');
    setToken(token);
    ins.defaults.headers.Authorization = `Bearer ${token}`;
  }
  if (res.headers.refreshtoken) {
    const refreshtoken = res.headers.refreshtoken.replace('Bearer ', '');
    setRefreshToken(refreshtoken);
  }
  return res.data;
});

export default ins;
