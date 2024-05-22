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
function sort(arr, info) {
  function dis(p1, p2) {
    return Math.abs(p1.home - p2.home);
  }
  return arr
    .map((it) => ({ ...it, dis: dis(it, info) }))
    .sort((a, b) => a.dis - b.dis);
}

let resArr = sort(schoolfellow, xm);

console.log(resArr);
