const getUserInfo = async () => {
  try {
    const userInfo = await fetch('/api/getUserInfo');
  } catch (err) {
    // 为了避免报错的空白catch
    toast(err.message);
    log(err);
  }
};
