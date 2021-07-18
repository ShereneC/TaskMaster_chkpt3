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
        <div class="col-md-4 col-sm-12 ${this.color.toLowerCase()} rounded shadow-dark m-2">
        <div class="row">
            <div class="col bg-secondary rounded-top d-flex justify-content-between">
                <h3 class="m-0">${this.name}</h3>
                <button type="button" class="btn btn-light p-0" onclick="app.listsController.removeList('${this.id}')">❌</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
            <p>Tasks:</p>
                <ul>
                ${this.MyTasks}
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex">
            <form onsubmit="app.listsController.addTask('${this.id}')" class="d-flex  align-items-center justify-content-between">
              <input type="text" name="task" id="task" placeholder="Add task..." required minlength="3" maxlength="50">
              <button type="submit" class="btn btn-primary p-0">➕</button>
            </form>
            </div>
        </div>
    </div>
        `
    }

    get MyTasks() {
        let template = ''
        let completed = 0
        let tasksTotal = 0
        let tasks = ProxyState.tasks.filter(task => task.listId === this.id)
        tasks.forEach(t => {
            template += t.Template
            tasksTotal++
            if (task.status == true) {
                completed++
            }
        })
        template += `<p>Completed:</p><p>${completed}/${tasksTotal}</p>`
        return template
    }
}
