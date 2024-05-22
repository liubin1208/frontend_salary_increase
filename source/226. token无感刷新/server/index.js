const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const SECRECT_KEY = '123456';
app.use(cors());

function createToken(res) {
  const token = jwt.sign(
    {
      id: 1,
      username: 'foo',
      token_type: 'TOKEN',
    },
    SECRECT_KEY,
    { expiresIn: 3 }
  );
  res.header('Authorization', `Bearer ${token}`);
  res.header('Access-Control-Expose-Headers', 'Authorization, RefreshToken');
}

function createRefreshToken(res) {
  const refresh_token = jwt.sign(
    {
      id: 1,
      token_type: 'REFRESH_TOKEN',
    },
    SECRECT_KEY,
    { expiresIn: '7d' }
  );
  res.header('RefreshToken', refresh_token);
  res.header('Access-Control-Expose-Headers', 'Authorization, RefreshToken');
}

app.post('/login', (req, res) => {
  // 登录成功，返回token
  createToken(res);
  createRefreshToken(res);
  res.send({
    code: 0,
    msg: '',
    data: {
      id: 1,
      username: 'foo',
    },
  });
});

app.post('/protected', (req, res) => {
  const authorization = req.headers.authorization;
  const errMsg = {
    code: 401,
    msg: 'Unauthorized',
  };
  if (!authorization) {
    res.send(errMsg);
    return;
  }
  const token = authorization.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, SECRECT_KEY);
    if (decoded.token_type !== 'TOKEN') {
      res.send(errMsg);
      return;
    }
    res.send({
      code: 0,
      msg: '',
      data: {
        content: '受保护的资源',
      },
    });
  } catch {
    res.send(errMsg);
  }
});

app.get('/refresh_token', (req, res) => {
  const authorization = req.headers.authorization;
  const errMsg = {
    code: 401,
    msg: 'Unauthorized',
  };
  if (!authorization) {
    res.send(errMsg);
    return;
  }
  const token = authorization.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, SECRECT_KEY);
    if (decoded.token_type !== 'REFRESH_TOKEN') {
      res.send(errMsg);
      return;
    }
    createToken(res);
    res.send({
      code: 0,
      msg: '',
      data: {
        content: '刷新token成功',
      },
    });
  } catch {
    res.send(errMsg);
  }
});

const PORT = 9527;

app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
