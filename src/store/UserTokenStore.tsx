import { makeAutoObservable } from "mobx"
import { makePersistable } from "mobx-persist-store"

class UserTokenStore {
  token = ""

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: "Token",
      properties: ["token"],
      storage: window.localStorage,
    })
  }
}

const userTokenStore = new UserTokenStore()
export default userTokenStore
