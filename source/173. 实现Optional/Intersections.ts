interface obj1 {
  a: string;
  b: string;
}

interface obj2 {
  c?: string;
  d?: string;
}

type obj3 = obj1 & obj2;

const obj: obj3 = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
};
