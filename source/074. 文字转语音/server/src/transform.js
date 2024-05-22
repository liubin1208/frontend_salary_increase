require('dotenv').config();
const CryptoJS = require('crypto-js');
const WebSocket = require('ws');
// 系统配置
const config = {
  // 请求地址
  hostUrl: 'wss://tts-api.xfyun.cn/v2/tts',
  host: 'tts-api.xfyun.cn',
  //在控制台-我的应用-在线语音合成（流式版）获取
  appid: process.env.APP_ID,
  //在控制台-我的应用-在线语音合成（流式版）获取
  apiSecret: process.env.APP_SECRET,
  //在控制台-我的应用-在线语音合成（流式版）获取
  apiKey: process.env.APP_KEY,
  uri: '/v2/tts',
};

// 鉴权签名
function getAuthStr(date) {
  let signatureOrigin = `host: ${config.host}\ndate: ${date}\nGET ${config.uri} HTTP/1.1`;
  let signatureSha = CryptoJS.HmacSHA256(signatureOrigin, config.apiSecret);
  let signature = CryptoJS.enc.Base64.stringify(signatureSha);
  let authorizationOrigin = `api_key="${config.apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  let authStr = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(authorizationOrigin)
  );
  return authStr;
}

function transform(text, voice = 'xiaoyan') {
  return new Promise((resolve, reject) => {
    const chunks = [];

    // 获取当前时间 RFC1123格式
    const date = new Date().toUTCString();
    // 设置当前临时状态为初始化
    const wssUrl =
      config.hostUrl +
      '?authorization=' +
      getAuthStr(date) +
      '&date=' +
      date +
      '&host=' +
      config.host;
    const ws = new WebSocket(wssUrl);

    // 连接建立完毕，读取数据进行识别
    ws.on('open', () => {
      let frame = {
        // 填充common
        common: {
          app_id: config.appid,
        },
        // 填充business
        business: {
          aue: 'lame',
          sfl: 1,
          auf: 'audio/L16;rate=16000',
          vcn: voice,
          tte: 'UTF8',
        },
        // 填充data
        data: {
          text: Buffer.from(text).toString('base64'),
          status: 2,
        },
      };
      ws.send(JSON.stringify(frame));
    });

    // 得到结果后进行处理，仅供参考，具体业务具体对待
    ws.on('message', (data, err) => {
      if (err) {
        reject(err);
        return;
      }

      const res = JSON.parse(data);

      if (res.code != 0) {
        ws.close();
        reject(res);
        return;
      }
      const audio = res.data.audio;
      const audioBuf = Buffer.from(audio, 'base64');
      chunks.push(audioBuf);
      if (res.code == 0 && res.data.status == 2) {
        ws.close();
        resolve(Buffer.concat(chunks));
      }
    });

    // 连接错误
    ws.on('error', (err) => {
      log.error('websocket connect err: ' + err);
      reject(err);
    });
  });
}

module.exports = transform;
