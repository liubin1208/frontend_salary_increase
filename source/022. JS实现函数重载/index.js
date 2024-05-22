function getUsers(...args) {
  if (args.length === 0) {
    console.log('查询所有用户');
  } else if (args.length === 1) {
    if (typeof args[0] === 'string') {
      console.log('按照姓名查询用户');
    } else if (typeof args[0] === 'number') {
      console.log('按照页码和数量查询用户');
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string' && typeof args[1] === 'string') {
      console.log('按照姓名和性别查询用户');
    } else if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      console.log('按照页码和数量查询用户');
    }
  }
}

getUsers(); // 得到所有用户
getUsers(1); // 得到第一页的用户，默认10个
getUsers(1, 20); // 得到第一页的20个用户
getUsers('张'); // 查找姓名包含张的用户
getUsers('张', '男'); // 查找姓名为张且性别为男的用户
