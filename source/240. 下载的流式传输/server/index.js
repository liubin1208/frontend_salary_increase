const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/es6.pdf', (req, res) => {
  // res.setHeader('Content-Disposition', 'attachment; filename=es6.pdf');
  res.sendFile(__dirname + '/es6.pdf');
});

const PORT = 9527;

app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
