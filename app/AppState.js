import List from "./Models/List.js"
import Value from "./Models/List.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/GenerateId.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  lists = [new List('This Weekend', generateId()), new List('Next Weekend', generateId()), new List('Next Month', generateId())]

}


// No Touchy Touchy
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
