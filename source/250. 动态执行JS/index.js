var a = 1;
function exec(code) {
  var a = 2;
  new Function(code)();
}

exec('console.log("a", a)');
console.log('sync');
