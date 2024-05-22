function arrange(name) {
  // code here
  const tasks = [];
  tasks.push(() => {
    console.log(`${name} is notified`);
  });

  function doSomething(action) {
    tasks.push(() => {
      console.log(`Start to ${action}`);
    });
    return this;
  }
  function wait(sec) {
    tasks.push(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, sec * 1000);
        })
    );
    return this;
  }
  async function execute() {
    for (const t of tasks) {
      await t();
    }
    return this;
  }
  function waitFirst(sec) {
    tasks.unshift(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, sec * 1000);
        })
    );
    return this;
  }

  return {
    do: doSomething,
    wait,
    execute,
    waitFirst,
  };
}

// arrange('William').execute();
// > William is notified

// arrange('William').do('commit').execute();
// > William is notified
// > Start to commit

// arrange('William').wait(5).do('commit').execute();
// > William is notified
// 等待5秒
// > Start to commit

arrange('William').waitFirst(5).do('push').execute();
// 等待5秒
// > William is notified
// > Start to push
