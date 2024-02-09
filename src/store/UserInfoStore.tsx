import { makeAutoObservable } from "mobx"
import { makePersistable } from "mobx-persist-store"

class UserInfoStore {
  userInfo = {}

  constructor() {
    makeAutoObservable(this),
    makePersistable(this, {
      name: "userInfo",
      properties: ["userInfo"],
      storage: window.localStorage,
    })
  }
}

const userInfoStore = new UserInfoStore()
export default userInfoStore
