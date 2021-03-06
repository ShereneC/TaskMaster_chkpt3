import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { generateId } from "../Utils/GenerateId.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"


//Private
function _draw() {
  let lists = ProxyState.lists
  console.log(lists)
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
  //  /*html*/`
  //   <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  //   <div className="card-columns values">
  //       ${template}
  //   </div>
  //   `
}

// function drawMoney() {
//   document.getElementById('balance').innerText = ProxyState.balance
// }

//Public
export default class ListsController {
  constructor() {
    console.log('Hello from the ListsController Class constructor');
    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)
    // ProxyState.on('balance', drawMoney)
    // _draw()
    // drawMoney()

    loadState()

  }

  createList(e) {
    // console.log('button click went through controller')
    e.preventDefault()
    let form = e.target
    // console.log(form)
    let rawList = {
      name: form.name.value,
      color: form.color.value,
      id: generateId(),
    }
    _draw()
    //   valuesService.addValue()
    // }

    // addMoney() {
    //   console.log('add money button was clicked')
    //   listsService.addMoney()
    listsService.createList(rawList)
    form.reset()
  }


  removeList(id) {
    let remove = confirm("Remove the list?");
    if (remove == true) {
      listsService.removeList(id)
    }
    console.log(id, 'this is the id')
  }

  addTask(listId) {
    event.preventDefault()
    let form = event.target
    let rawTask = {
      name: form.task.value,
      listId,
      status: document.getElementById("complete")
    }
    console.log("add task worked")
    console.log(rawTask)
    listsService.addTask(rawTask)
    form.reset()
  }

  removeTask(id) {
    let removeTask = confirm("Remove the task?");
    if (removeTask == true) {
      listsService.removeTask(id)
    }
  }
}

