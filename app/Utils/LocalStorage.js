
import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
// import Task from "../Models/Task.js";

export function saveState() {
  localStorage.setItem('TaskMaster', JSON.stringify({
    lists: ProxyState.lists,
    // toppings: ProxyState.toppings
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('TaskMaster'))
  console.log(data)
  if (data != null) {
    ProxyState.lists = data.lists.map(p => new List(p))
    // ProxyState.toppings = data.toppings.map(t => new Topping(t))
  }

}