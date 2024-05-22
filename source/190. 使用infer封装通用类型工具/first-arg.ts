type FirstArg<T> = T extends (x: infer F, ...args: any[]) => any ? F : T;

type fa = FirstArg<(name: number, age: number) => void>; // number
