import axios from 'axios';
import { MyExampleError, UnknownError } from './errors';

/**
 * default axios http client
 * @example
 * import http from '@/api
 * http.get('/users')
 */
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// add custom error recognizer
http.interceptors.response.use((response) => {
  const { data } = response;
  if (typeof data === 'object' && data.code) {
    const { code } = data;
    if (typeof code === 'string') {
      if (code === 'MY_EXAMPLE_ERROR') {
        throw new MyExampleError(response);
      }
    }

    throw new UnknownError(response);
  }
  return response;
});

export default http;

/**
 * another example axios http client
 * @example
 * import { httpAnother } from '@/api
 * httpAnother.get('/users')
 */
export const httpAnother = axios.create();
