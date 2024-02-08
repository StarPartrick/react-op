import { request } from '@/utils/request'
import { LoginType } from './types';

export const getTokenData = (data: LoginType) => {
  return request.post('/authorizations', data);
}
export const getUserInfo = () => {
  return request.get('/user/profile')
}