import axios, { AxiosInstance } from 'axios';
import qs from 'qs';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8010/proxy/recrutamentos/frontend',
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }),
  headers: {
    'Access-Control-Allow-Origin': 'http://fractaleng.com.br',
  }
});

export default api;
