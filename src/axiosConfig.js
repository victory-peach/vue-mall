import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9528/api',
});

instance.interceptors.request.use((config) => config);

instance.interceptors.response.use((res) => res);
export default instance;
