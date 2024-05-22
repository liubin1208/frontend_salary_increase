export async function getVoice(text) {
  const resp = await fetch('http://localhost:9527/voice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
    }),
  });
  const body = await resp.json();
  return body.data;
}
