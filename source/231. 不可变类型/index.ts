type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

interface Immutable {
  a: number;
  b: string;
  c: {
    d: boolean;
  };
}
const im: DeepReadonly<Immutable> = {
  a: 1,
  b: '2',
  c: {
    d: true,
  },
};
im.c.d = true;
