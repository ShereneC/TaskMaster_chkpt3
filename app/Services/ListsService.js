import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Value from "../Models/List.js";

class ListsService {
  createList(rawList) {
    console.log('button click worked')
    console.log(ProxyState.lists)
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
    // ProxyState.balance += 10
    // console.log('Balance is', ProxyState.balance)
    // ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const listsService = new ListsService();

