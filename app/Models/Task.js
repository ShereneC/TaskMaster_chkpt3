import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, id = generateId() }) {
    this.name = name
    this.listId = listId
    this.id = id
    // this.complete = false
  }
  get Template() {
    return `
  <li>${this.name}</li>
  `
  }
}