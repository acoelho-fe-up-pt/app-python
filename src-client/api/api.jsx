import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NODE_ENV === 'production' ? '/' : 'http://127.0.0.1:3000/'}`
});

instance.interceptors.request.use((config) => {
  const jwtToken = localStorage.getItem('token');
  if (!jwtToken) return config;

  const jwt = JSON.parse(atob(jwtToken.split('.')[1]));
  // multiply by 1000 to convert seconds into milliseconds
  const expirationDate = jwt && jwt.exp && jwt.exp * 1000;
  if (Date.now() <= expirationDate) {
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});

export default instance;
