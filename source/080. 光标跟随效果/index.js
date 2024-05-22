const textContainer = document.querySelector('.text-container');
const textElem = document.querySelector('.text');
const cursor = document.querySelector('.cursor');

async function autoAppend() {
  function delay(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
  function transfer(text) {
    let result = text
      .split('\n')
      .map((t) => `<p>${t}</p>`)
      .join('');
    return result;
  }
  const content = `音频和视频
  
  文件的元
  数据可能包含一些
  
  信息，如标题、艺术家、专辑等。然而，文件的创建时间通常不存储在文件元数据中，而是由文件系统处理。`;

  for (let i = 0; i < content.length; i++) {
    let text = content.slice(0, i);
    let result = transfer(text);
    textElem.innerHTML = result;
    updateCursor();
    await delay(100);
  }
}

autoAppend();

function getLastTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node;
  }
  const children = node.childNodes;
  for (let i = children.length - 1; i >= 0; i--) {
    const child = children[i];
    const result = getLastTextNode(child);
    if (result) {
      return result;
    }
  }
  return null;
}

function updateCursor() {
  // 1. 追加一个文字到末尾
  const lastTextNode = getLastTextNode(textElem);
  const textNode = document.createTextNode('袁');
  if (lastTextNode) {
    lastTextNode.parentNode.appendChild(textNode);
  } else {
    textElem.appendChild(textNode);
  }

  // 2. 获取追加的文字位置
  const range = document.createRange();
  range.setStart(textNode, 0);
  range.setEnd(textNode, 0);
  const rect = range.getBoundingClientRect();
  // 3. 根据位置设置光标的位置
  const containerRect = textContainer.getBoundingClientRect();
  const x = rect.x - containerRect.x;
  const y = rect.y - containerRect.y;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
  // 4. 移除追加的文字
  textNode.remove();
}
