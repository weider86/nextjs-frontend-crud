import axios from 'axios';
import { apiUrl } from './apiUrl';

const getArticleById = (id) =>
  axios.get(`${apiUrl}/article/${id}`).then(({ data }) => data);

export { getArticleById };
