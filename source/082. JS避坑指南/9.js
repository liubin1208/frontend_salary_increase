// ajax响应拦截器
const AUTHKEY = 'authorization';
const TOKENKEY = 'token';

function responseInterceptor(resp) {
  const token = resp.headers.get(AUTHKEY);
  if (token) {
    localStorage.setItem(TOKENKEY, token);
  }
}
// ajax请求拦截器
function requestInterceptor(req) {
  const token = localStorage.getItem(TOKENKEY);
  if (token) {
    req.headers.set(AUTHKEY, `Bearer ${token}`);
  }
}
