const express = require('express');
const router = express.Router();
const fs = require('fs');
const utils = require('./utils');

router.get('/verify', require('./verify'));
router.post('/fileinfo', require('./fileInfoHandler'));
router.post('/', async (req, res) => {
  const hash = req.get('l-hash');
  const index = +req.get('l-index');
  const fileInfo = await utils.getFileInfo(hash);
  if (fileInfo.url || !fileInfo.rest) {
    // 该文件早已处理完毕 或 没有该文件的任何信息
    res.send(fileInfo);
    return;
  }
  if (!fileInfo.rest.includes(index)) {
    // 该分片已经处理过了
    res.send({
      continue: true,
    });
    return;
  }
  // 处理分片
  const chunkFilename = utils.getChunkFileName(hash, index);
  const stream = fs.createWriteStream(chunkFilename);

  const i = fileInfo.rest.indexOf(index);
  fileInfo.rest.splice(i, 1);
  const isFinish = fileInfo.rest.length === 0;
  req.on('end', async () => {
    stream.close();

    if (isFinish) {
      fileInfo.url = utils.getUrl(req, fileInfo);
      await utils.saveFileInfo(hash, fileInfo);
      await utils.combine(hash);
      res.send(fileInfo);
    } else {
      await utils.saveFileInfo(hash, fileInfo);
      res.send({
        continue: true,
      });
    }
  });
  req.pipe(stream);
});

module.exports = router;
