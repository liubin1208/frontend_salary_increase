const url = 'http://localhost:7010/chat';

async function getResponse() {
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: '讲个坤坤和马老师打拳击的故事，可以虚构，要讲得精彩',
    }),
  });
  const reader = resp.body.getReader();
  const textDecoder = new TextDecoder();
  while (1) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const str = textDecoder.decode(value);
    console.log(str);
  }
}
