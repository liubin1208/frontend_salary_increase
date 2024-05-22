type WrapNaked<T> = T extends any ? { o: T } : never;

/* 
{ o: string } 
|
{ o: number }
|
{ o: boolean } 
*/

type Foo = WrapNaked<string | number | boolean>;
