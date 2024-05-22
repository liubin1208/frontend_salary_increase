interface ComplexObject {
  mandatory: string;
  option1?: number;
  option2?: boolean;
}
type GetOptional<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
};

let keys: GetOptional<ComplexObject>;
// { option1?: number; option2?: boolean; }
