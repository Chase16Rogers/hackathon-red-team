import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'
// import Profiles from "./Models/Profiles.js"
import Fight from "../app/Models/Fight.js"
import Comment from "../app/Models/Comment.js"

class AppState extends EventEmitter {
  user = {}
  account = {}

  //Client Objects
  // /** @type {Profiles[]} */
  // profiles = []
  /** @type {Comment[]} */
  comments = []
  /** @type {Fight[]} */
  fights = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
