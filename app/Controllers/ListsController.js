import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"


//Private
function _draw() {
  console.log('hello from function draw in listscontroller')
  let lists = ProxyState.lists
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
    //   ProxyState.on("values", _draw);
    // ProxyState.on('balance', drawMoney)
    _draw()
    // drawMoney()

  }

  createList() {
    console.log('button click went through controller')
    //   valuesService.addValue()
    // }

    // addMoney() {
    //   console.log('add money button was clicked')
    //   listsService.addMoney()
    listsService.createList()
  }

}

