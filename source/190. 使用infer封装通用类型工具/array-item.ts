type ArrayType<T> = T extends (infer I)[] ? I : T;

type ItemType1 = ArrayType<[string, number]>; // string | number
type ItemType2 = ArrayType<string[]>; // string
