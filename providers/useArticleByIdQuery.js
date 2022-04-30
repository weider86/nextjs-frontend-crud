import { useQuery } from 'react-query';
import { getArticleById } from '../api/getArticleById';

const useArticleByIdQuery = (articleId) =>
  useQuery(['article', articleId], () => getArticleById(articleId), {
    enabled: !!articleId,
  });

export { useArticleByIdQuery };
