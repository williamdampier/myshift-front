import axios from 'axios';
import { getUserFromLocalStorage } from './localstorage';

const customFetch = axios.create({
  //!TODO add .env URL
  baseURL: '',
});

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customFetch;
