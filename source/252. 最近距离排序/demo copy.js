let xm = {
  name: '小明',
  home: 700,
};

let schoolfellow = [
  {
    name: '李华',
    home: 300,
  },
  {
    name: '王强',
    home: 701,
  },
  {
    name: '杨树',
    home: 1500,
  },
  {
    name: '成全',
    home: 1000,
  },
  {
    name: '无奈',
    home: 900,
  },
];

/**
 * 根据info的距离，为arr元素排序出离info近的元素，近的元素靠前
 * @param {*} arr 源数据
 * @param {*} info 排序参考对象
 */
function getRes(arr, info) {
  let res = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minJl = Math.abs(arr[0].home - info.home);
    let minIndex = 0;
    for (let j = 1; j < arr.length; j++) {
      let jl = Math.abs(arr[j].home - info.home);
      if (jl < minJl) {
        minJl = jl;
        minIndex = j;
      }
    }
    // 把距离最近的元素放到结果数组中
    res.push(arr[minIndex]);
    // 删除源数组中距离最近的元素
    arr.splice(minIndex, 1);
  }
  return res;
}

let resArr = getRes(schoolfellow, xm);

console.log(resArr);
