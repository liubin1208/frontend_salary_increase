function isFullCombination(datas) {
  // 去重
  if (datas.length === 0) {
    return false;
  }
  const fieldMap = new Map();
  const keys = Object.keys(datas[0]);
  const valueMap = new Map();
  let num = 1;
  const valueChains = new Set();
  for (const item of datas) {
    let valueChain = '';
    for (const key of keys) {
      const value = item[key];
      if (!valueMap.has(value)) {
        valueMap.set(value, num++);
      }
      const n = valueMap.get(value);
      valueChain += '-' + n;
      let valueSet = fieldMap.get(key);
      if (!valueSet) {
        valueSet = new Set();
        fieldMap.set(key, valueSet);
      }
      valueSet.add(value);
    }
    valueChains.add(valueChain);
  }
  const n1 = [...fieldMap.values()].reduce((a, b) => a * b.size, 1);
  const n2 = valueChains.size;
  return n1 === n2;
}

const inputData = [
  { 字段1: '甲', 字段2: 'a', 字段3: 1 },
  { 字段1: '甲', 字段2: 'a', 字段3: 1 },
  { 字段1: '甲', 字段2: 'a', 字段3: 3 },
  { 字段1: '甲', 字段2: 'b', 字段3: 1 },
  { 字段1: '甲', 字段2: 'b', 字段3: 2 },
  { 字段1: '甲', 字段2: 'b', 字段3: 3 },
  { 字段1: '乙', 字段2: 'a', 字段3: 1 },
  { 字段1: '乙', 字段2: 'a', 字段3: 2 },
  { 字段1: '乙', 字段2: 'a', 字段3: 3 },
  { 字段1: '乙', 字段2: 'b', 字段3: 1 },
  { 字段1: '乙', 字段2: 'b', 字段3: 2 },
  { 字段1: '乙', 字段2: 'b', 字段3: 3 },
];

console.log(isFullCombination(inputData));
