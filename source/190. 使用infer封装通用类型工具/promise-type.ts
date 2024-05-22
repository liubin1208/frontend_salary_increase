type PromiseType<T> = T extends Promise<infer K> ? PromiseType<K> : T;

type pt = PromiseType<Promise<Promise<string>>>; // string
