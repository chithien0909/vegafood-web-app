import Axios from "axios";

// Axios.interceptors.request.use(function (config) {
//   config.headers.Authorization = localStorage.getItem('token');
//   return config;
// });
export default Axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});
