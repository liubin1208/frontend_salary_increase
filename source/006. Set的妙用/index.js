// 两个数组的并集、交集、差集
// 不能出现重复项，得到的结果是一个新数组
const arr1 = [33, 22, 22, 55, 33, 11, 33, 5];
const arr2 = [22, 22, 55, 77, 88, 88, 99, 99];

const union = [...new Set([...arr1, ...arr2])];

const cross = [...new Set(arr1.filter((it) => arr2.includes(it)))];

const diff = union.filter((it) => !cross.includes(it));
