import axios from "axios";

const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

request.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('Token') ?? '')?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config

}, (error) => {
  return Promise.reject(error)
})

request.interceptors.response.use((config) => {
  return config
},(error) => {
  return Promise.reject(error)
})

export { request }