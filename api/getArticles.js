import axios from 'axios';
import { apiUrl } from './apiUrl';

const getArticles = () => axios.get(apiUrl).then(({ data }) => data);

export { getArticles };
