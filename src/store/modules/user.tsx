import { createSlice } from '@reduxjs/toolkit'
import { LoginType }  from '@/api/types'
import { request } from '@/utils/index'


const userStore = createSlice({
  name: 'user',
  initialState: {
    token: ''
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    }
  } 
})

const { setToken } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm: LoginType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (dispatch: (arg0: { payload: any; type: "user/setToken" }) => void) => {
    // 发送异步请求
   const res = await request.post('/authorizations', loginForm)
   // 同步数据
   dispatch(setToken(res.data.token))
  }
} 

export {
  setToken,
  userReducer,
  fetchLogin
}