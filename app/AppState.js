import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  lists = []

  // new List('This Weekend', 'teal', generateId()), new List('Next Weekend', 'blue', generateId()), new List('Next Month', 'purple', generateId())
  tasks = []
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
