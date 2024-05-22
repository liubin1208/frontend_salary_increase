import getName from './getName.js';

String.prototype.asyncReplaceAll = async function (pattern, replacer) {
  if (typeof replacer === 'string') {
    return this.replaceAll(pattern, replacer);
  }
  if (typeof replacer !== 'function') {
    throw new TypeError(
      'The second argument should be an async function or a string'
    );
  }
  let reg;
  if (typeof pattern === 'string') {
    reg = new RegExp(pattern.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'), 'g');
  } else if (pattern instanceof RegExp) {
    if (!pattern.global) {
      throw new TypeError('The pattern RegExp should have the global flag set');
    }
    reg = new RegExp(pattern);
  } else {
    throw new TypeError('The pattern should be a string or a RegExp');
  }
  let match;
  let lastIndex = 0;
  const result = [];
  while ((match = reg.exec(this)) !== null) {
    const str = this.slice(lastIndex, match.index);
    const prom = replacer(match[0]);
    lastIndex = match.index + match[0].length;
    result.push(str, prom);
  }
  result.push(this.slice(lastIndex));
  const temp = await Promise.all(result);
  return temp.join('');
};

const template = `234,55-234_j24——455asfasfdasfdas`;
(async () => {
  const result = await template.asyncReplaceAll(/\d+/g, (match) =>
    getName(match)
  );
  console.log(result);
})();
