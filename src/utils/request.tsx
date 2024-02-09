import router from "@/router";
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
  return config.data
},(error) => {
  if(error.response.status === 401) {
    router.navigate('/login')
    window.location.reload()
  }
  return Promise.reject(error)
})

export { request }