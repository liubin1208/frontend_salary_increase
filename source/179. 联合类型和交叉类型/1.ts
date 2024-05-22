// 联合类型
type UnionType =
  | {
      a: number;
      b: number;
    }
  | {
      b: number;
      c: number;
    };

const data1: UnionType = {
  a: 1,
  b: 1,
  c: 2,
};
data1.b;

// 交叉类型
type IntersectionType = {
  a: number;
  b: number;
} & {
  b: number;
  c: number;
};
const data2: IntersectionType = {
  a: 1,
  b: 2,
  c: 3,
};
