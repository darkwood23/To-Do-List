import { pageAssemble } from "./createPage"

function getInformation(list) {
    let title = document.getElementById("title").value
    let priority = document.getElementById("priority").value
    let dueDate = document.getElementById("date").value
    list.push({title, priority, dueDate})
    addToStorage(list)
}

function addToStorage(list) {
    localStorage.setItem("myProjects", JSON.stringify(list))
    pageAssemble(list, document.getElementById("container"))
}

export {addToStorage, getInformation}