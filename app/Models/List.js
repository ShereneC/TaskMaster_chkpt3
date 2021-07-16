import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor({ name, color, id }) {
        this.name = name
        this.color = color
        this.id = id
    }

    get Template() {

        return /*html*/`
        <div class="col-3  bg-primary rounded shadow-dark m-2">
        <div class="row">
            <div class="col bg-secondary rounded-top">
                <h3>${this.name}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ul>
                    <li>Sweep the Garage</li>
                    <li>Weed the Garden</li>
                    <li>Mow the Lawn</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex flex-row">
                <h6>Add Task</h6>
                <button type="button" class="btn btn-primary">+</button>
            </div>
        </div>
    </div>
        `
    }
}
