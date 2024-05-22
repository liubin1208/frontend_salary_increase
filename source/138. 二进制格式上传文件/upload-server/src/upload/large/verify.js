const path = require('path');
const utils = require('./utils');
module.exports = async (req, res) => {
  const hash = req.query.hash;
  let fileInfo = await utils.getFileInfo(hash);
  res.send(fileInfo);
};
