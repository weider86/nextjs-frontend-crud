import { useQuery } from 'react-query';
import { getAuthor } from '../../api/getAuthor';

const useAuthorQuery = () => useQuery(['author'], () => getAuthor());

export { useAuthorQuery };
