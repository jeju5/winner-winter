import axios from 'axios';

const unsplashClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Lj6c2xq0LVwuufH0l0yLy8o63Kop_IUBSY9mQf7boXY'
  }
});

export default unsplashClient;