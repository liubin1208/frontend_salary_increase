function removeSpace(str) {
  return str.replace(/\s/g, '');
}

var removeSpace = (function () {
  var reg = /\s/g;
  return function (str) {
    return str.replace(reg, '');
  };
})();
