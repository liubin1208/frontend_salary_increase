// 下面的跨域请求哪些是简单请求，哪些是预检请求

// 1
fetch('https://douyin.com');

// 2
fetch('https://douyin.com', {
  headers: {
    a: 1,
  },
});

// 3
fetch('https://douyin.com', {
  method: 'POST',
  body: JSON.stringify({ a: 1, b: 2 }),
});

// 4
fetch('https://douyin.com', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({ a: 1, b: 2 }),
});
