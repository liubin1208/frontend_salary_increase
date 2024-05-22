const transform = require('./transform');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.post('/voice', async (req, res) => {
  const text = req.body.text;
  if (text.length > 200) {
    res.send(formatResponse('消息内容过长，必须在200字符以内'));
    return;
  }
  const buffer = await transform(text);
  const base64 = buffer.toString('base64');
  res.send(formatResponse(null, base64));
});

function formatResponse(err, data) {
  let msg = err;
  if (typeof msg === 'object' && msg) {
    msg = msg.message;
  }
  if (err) {
    return {
      code: 401,
      msg,
      data: null,
    };
  } else {
    return {
      code: 0,
      msg: '',
      data,
    };
  }
}

const PORT = 9527;

app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
