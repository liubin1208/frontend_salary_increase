interface Article {
  title: string;
  content: string;
  author: string;
  date: Date;
  readCount: number;
}

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type CreateArticleOptions = Optional<Article, 'author' | 'date' | 'readCount'>;

function createArticle(options: CreateArticleOptions) {}
