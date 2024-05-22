function getUser() {
  return fetch('./1.json');
}

function m1() {
  const user = getUser();
  // other works
  return user;
}

function m2() {
  const user = m1();
  // other works
  return user;
}

function m3() {
  const user = m2();
  // other works
  return user;
}

function main() {
  const user = m3();
  console.log(user);
}

function run(func) {
  // 改动环境
  let cache = {
    status: 'pending',
    value: null,
  };
  const oldFetch = window.fetch;
  window.fetch = function (...args) {
    if (cache.status === 'fulfilled') {
      return cache.value;
    } else if (cache.status === 'rejected') {
      throw cache.value;
    }
    // 1. 发送真实请求
    const prom = oldFetch(...args)
      .then((resp) => resp.json())
      .then(
        (res) => {
          cache.status = 'fulfilled';
          cache.value = res;
        },
        (err) => {
          cache.status = 'rejected';
          cache.value = err;
        }
      );
    // 2. 抛出错误
    throw prom;
  };
  // 执行入口函数
  try {
    func();
  } catch (err) {
    if (err instanceof Promise) {
      err.then(func, func).finally(() => {
        window.fetch = oldFetch;
      });
    }
  }
}

run(main);
