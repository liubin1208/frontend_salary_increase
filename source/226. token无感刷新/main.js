import { login, reqProtected, refreshToken } from './api';

const btnLogin = document.querySelector('#btnLogin');
btnLogin.onclick = () => {
  login().then(() => {
    console.log('登录成功');
  });
};

const btnReqProtected = document.querySelector('#btnReqProtect');
btnReqProtected.onclick = () => {
  reqProtected().then((res) => {
    console.log(res.data);
  });
};

const btnRefresh = document.querySelector('#btnRefresh');
btnRefresh.onclick = () => {
  refreshToken().then(() => {});
};
