import { useQuery } from 'react-query';
import { getArticles } from '../api/getArticles';

const useArticlesQuery = () => useQuery(['articles'], () => getArticles());

export { useArticlesQuery };
