const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/data', (req, res) => {
  // 10M data
  const buffer = new ArrayBuffer(1024 * 1024);
  res.send(Buffer.from(buffer));
});

const PORT = 9527;

app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
