const path = require('path');
const utils = require('./utils');
module.exports = async (req, res) => {
  const { hash, name, type, chunkLength } = req.body;
  let fileInfo = await utils.getFileInfo(hash);
  if (fileInfo.rest) {
    res.send(fileInfo);
  } else {
    fileInfo = {
      fileHash: hash,
      type: type,
      ext: path.extname(name),
      url: null,
      rest: new Array(chunkLength).fill(0).map((n, i) => i),
    };
    utils.saveFileInfo(hash, fileInfo);
    res.send(fileInfo);
  }
};
