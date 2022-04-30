import axios from 'axios';
import { apiUrl } from './apiUrl';

const getAuthor = () => axios.get(`${apiUrl}/author`).then(({ data }) => data);

export { getAuthor };
