function removeSpace(str) {
  return str.replace(/\s/g, '');
}

const createRemoveSpace = () => {
  const reg = /\s/g,
    replacement = '';
  return (str) => str.replace(reg, replacement);
};
let createSpace = createRemoveSpace();
createSpace('sadf dfsdf sadfs');
createSpace('sadf dfsdf sadfs');
createSpace('sadf dfsdf sadfs');
createSpace('sadf dfsdf sadfs');
createSpace=null;