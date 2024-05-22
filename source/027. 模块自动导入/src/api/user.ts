export interface User {
  name: string;
  age: number;
}

export async function profile(): Promise<User> {
  return {
    name: 'Shae',
    age: 2,
  };
}

export async function login(id: string, pwd: string): Promise<User> {
  return {
    name: 'Shae',
    age: 2,
  };
}
