import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.optimatrademarket.co/api/task/',
  // baseURL: 'http://localhost:8001/api/task/',
});

export default api;