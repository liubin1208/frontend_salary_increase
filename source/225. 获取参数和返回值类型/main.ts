import { login } from './api';

let options: Parameters<typeof login>[0];

let resp: ReturnType<typeof login> | null = null;
