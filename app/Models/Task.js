import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, id = generateId(), status }) {
    this.name = name
    this.listId = listId
    this.id = id
    this.status = status
  }
  get Template() {
    return `
  <li><span><input type="checkbox" id="complete" name="complete" value="false" class="mr-2"}></span>${this.name}<span class="action ml-2" onclick="app.listsController.removeTask('${this.id}')">✖</span></li>
  `
  }
}