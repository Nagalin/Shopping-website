import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your desired base URL
});

axiosInstance.interceptors.request.use(config => {
  const jwtToken = JSON.parse(localStorage.getItem('jwtToken')!);
  config.headers.authorization = `Bearer ${jwtToken}`;
  return config;
});

export default axiosInstance;
