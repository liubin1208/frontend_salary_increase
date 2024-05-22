type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

function request(method: Method, url: string) {
  switch (method) {
    case 'GET':
      return 'asdfasf';
    case 'POST':
      return 'asdfasdf';
    default:
      const n: never = method;
  }
}
