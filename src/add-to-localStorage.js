import { pageAssemble } from "./createPage"

function getInformation(list) {
    let title = document.getElementById("title").value
    let priority = document.getElementById("priority").value
    let dueDate = document.getElementById("date").value
    let noOfPeople = document.getElementById("how-many").value
    let names = document.getElementById("names").value
    names = names.split(",")
    let todo = []
    list.push({title, priority, dueDate, noOfPeople, names, todo})
    addToStorage(list)
}

function addToStorage(list) {
    localStorage.setItem("myProjects", JSON.stringify(list))
    pageAssemble(list, document.getElementById("container"))
}

export {addToStorage, getInformation}