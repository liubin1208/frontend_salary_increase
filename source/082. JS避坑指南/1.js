getUserInfo().then((userInfo) => {
  getArticles(userInfo).then((articles) => {
    Promise.all(articles.map((article) => getArticleDetail(article))).then(
      (articleDetails) => {
        console.log(articleDetails);
      }
    );
  });
});
getUserInfo()
  .then(getArticles)
  .then((articles) =>
    Promise.all(articles.map((article) => getArticleDetail(article)))
  )
  .then((articleDetails) => {
    console.log(articleDetails);
  });
