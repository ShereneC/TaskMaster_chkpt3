import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";


class ListsService {
  createList(rawList) {
    console.log('button click worked')
    console.log(ProxyState.lists)
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
    // ProxyState.balance += 10
    // console.log('Balance is', ProxyState.balance)
    // ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }

  addTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
  }
  removeList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
  }

}

export const listsService = new ListsService();

