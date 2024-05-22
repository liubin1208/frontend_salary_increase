const fs = require('fs');
const path = require('path');

const basePath = path.resolve(__dirname, '../../../public/upload', 'large');

if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}

async function getFileInfo(hash) {
  const fileDir = path.resolve(basePath, hash);
  if (!fs.existsSync(fileDir)) {
    return {
      fileHash: hash,
      type: null,
      ext: null,
      url: null,
      rest: null,
    };
  }
  const filepath = path.resolve(fileDir, 'info.json');
  const content = await fs.promises.readFile(filepath, 'utf-8');
  return JSON.parse(content);
}

async function saveFileInfo(hash, info) {
  const fileDir = path.resolve(basePath, hash);
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir);
  }
  const filepath = path.resolve(fileDir, 'info.json');
  await fs.promises.writeFile(filepath, JSON.stringify(info), 'utf-8');
}

function getChunkFileName(hash, index) {
  return path.resolve(basePath, hash, `${index}.chunk`);
}

function getUrl(req, fileInfo, basePath = '/upload') {
  return `${req.protocol}://${req.header('host')}${basePath}/large/${
    fileInfo.fileHash
  }/u${fileInfo.ext}`;
}

function combine(hash) {
  return new Promise(async (resolve) => {
    const dir = path.resolve(basePath, hash);
    let files = await fs.promises.readdir(dir);
    files = files
      .filter((f) => f.endsWith('.chunk'))
      .map((f) => {
        const i = f.indexOf('.');
        return [+f.substring(0, i), f];
      })
      .sort((a, b) => a[0] - b[0])
      .map((f) => f[1]);
    const fileInfo = await getFileInfo(hash);
    const combineFilename = path.resolve(basePath, hash, `u${fileInfo.ext}`);
    const writeStream = fs.createWriteStream(combineFilename);

    const merge = () => {
      if (files.length === 0) {
        writeStream.end();
        resolve();
        return;
      }
      const name = files.shift();
      const filename = path.resolve(dir, name);
      const readStream = fs.createReadStream(filename);
      readStream.on('end', () => {
        fs.promises.rm(filename);
        merge();
      });
      readStream.pipe(writeStream, {
        end: false,
      });
    };
    merge();
  });
}

exports.getFileInfo = getFileInfo;
exports.saveFileInfo = saveFileInfo;
exports.getChunkFileName = getChunkFileName;
exports.getUrl = getUrl;
exports.combine = combine;
