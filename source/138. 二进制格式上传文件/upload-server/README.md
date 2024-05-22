# 服务器接口文档

## 单文件上传

请求路径：`/upload/single`

请求方法：`POST`

消息格式：`multipart/form-data`

字段名称：`avatar`

允许的后缀名：`['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png']`

最大尺寸：`1M`

响应格式：`JSON`

响应结果示例：

```json
// 成功
{
  "data": "文件的访问地址"
}
// 失败：后缀名不符号要求
{
  "errCode": 1,
  "errMsg": "后缀名不符合要求"
}
// 失败：文件过大
{
  "errCode": 2,
  "errMsg": "文件过大"
}
```

## base64 上传

请求路径：`/upload/base64`

请求方法：`POST`

消息格式：`json`，示例：

```json
{
  "ext": ".png",
  "avatar": "图片的base64格式"
}
```

允许的后缀名：`['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png']`

最大尺寸：`1M`

响应格式：`JSON`

响应结果示例：

```json
// 成功
{
  "data": "文件的访问地址"
}
// 失败：后缀名不符号要求
{
  "errCode": 1,
  "errMsg": "后缀名不符合要求"
}
// 失败：文件过大
{
  "errCode": 2,
  "errMsg": "文件过大"
}
```

## 二进制格式上传

请求路径：`/upload/binary`

请求方法：`POST`

消息格式：`binary (application/octet-stream)`

消息头：`x-ext: 文件的后缀名，例如.jpg`

直接在消息体中放置二进制数据

允许的后缀名：`['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png']`

最大尺寸：`1M`

响应格式：`JSON`

响应结果示例：

```json
// 成功
{
  "data": "文件的访问地址"
}
// 失败：后缀名不符号要求
{
  "errCode": 1,
  "errMsg": "后缀名不符合要求"
}
// 失败：文件过大
{
  "errCode": 2,
  "errMsg": "文件过大"
}
```

## 多文件上传

请求路径：`/upload/multi`

请求方法：`POST`

消息格式：`multipart/form-data`

字段名称：`photos`

允许的后缀名：`['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png']`

每个文件允许的最大尺寸：`1M`

允许的最大文件数量：`10`

响应格式：`JSON`

响应结果示例：

```json
// 成功
{
  "data": [
    "文件的访问地址1",
    "文件的访问地址2",
    "..."
  ]
}
// 失败：后缀名不符号要求
{
  "errCode": 1,
  "errMsg": "后缀名不符合要求"
}
// 失败：文件过大
{
  "errCode": 2,
  "errMsg": "文件过大"
}
// 失败：文件数量超过限制
{
  "errCode": 3,
  "errMsg": "文件数量超过要求"
}
```

## 大文件分片上传

### 文件状态校验

请求路径：`/upload/large/verify`

请求方法：`GET`

请求参数：

| 参数名 | 含义               |
| ------ | ------------------ |
| hash   | 文件的整体 hash 值 |

响应格式：`JSON`

响应结果分为三种情况：

1. 服务器从未收到该文件的信息

   ```js
   {
     "fileHash": "文件hash",
     "type": null,
     "ext": null,
     "url": null,
     "rest": null
   }
   ```

2. 服务器已收到该文件的部分分片数据，仍需上传剩余下标的分片

   ```json
   {
     "fileHash": "文件hash",
     "type": "文件的MIME类型",
     "ext": ".mp4",
     "url": null,
     "rest": [133, 134, 138, 155, ...]
   }
   ```

3. 服务器已完整的收到了该文件

   ```json
   {
     "fileHash": "文件hash",
     "type": "文件的MIME类型",
     "ext": ".mp4",
     "url": "访问该文件的url地址",
     "rest": []
   }
   ```

### 文件信息上传

请求路径：`/upload/large/fileinfo`

请求方法：`POST`

请求格式：`JSON`

请求体：

```json
{
  "hash": "文件的整体hash值",
  "name": "文件名",
  "type": "文件的MIME类型",
  "chunkLength": 分片数量
}
```

响应格式：`JSON`

响应结果：同文件校验结果

### 文件上传

请求路径：`/upload/large`

请求方法：`POST`

请求格式：`binary (application/octet-stream)`

请求头：

- `l-index: 分片的下标`
- `l-hash: 文件的整体hash值`

请求体：直接在消息体中放置二进制数据

响应格式：`JSON`

响应结果示例：

```json
{
  continue: true
}
```

```∂json
{
  "fileHash": "文件hash",
  "type": "文件的MIME类型",
  "ext": ".mp4",
  "url": "访问该文件的url地址",
  "rest": []
}
```
