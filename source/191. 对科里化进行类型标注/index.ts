/* 
1. ()=>R
2. (p)=>R
3. (p)=>新的函数
*/

type Curried<A extends any[], R> = A extends []
  ? () => R
  : A extends [infer ARG]
  ? (p: ARG) => R
  : A extends [infer ARG, ...infer REST]
  ? (p: ARG) => Curried<REST, R>
  : never;

declare function curry<A extends any[], R>(
  func: (...args: A) => R
): Curried<A, R>;

function sum(a: number, b: number, c: number) {
  return 123;
}

const curried = curry(sum);
const r = curried(2)(3)(4);
