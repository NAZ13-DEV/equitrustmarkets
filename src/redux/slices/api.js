import axios from 'axios';


// const api = axios.create({
//  baseURL: "https://api.crownexchange.org/api/task/",
// });

// const api = axios.create({
//  baseURL: "http://192.168.8.184/crownApi/api/task/",
// });

const api = axios.create({
  baseURL: 'http://localhost:8001/api/task/',
});

export default api;
