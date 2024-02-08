import { makeAutoObservable } from "mobx"
import { makePersistable } from "mobx-persist-store" // 引入相关api

class UserTokenStore {
  token = "" // 定义数据
  constructor() {
    makeAutoObservable(this),
      makePersistable(this, {
        name: "Token",
        properties: ["token"],
        storage: window.localStorage,
      })
  }
}

const userStore = new UserTokenStore()
export default userStore
