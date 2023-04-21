import { createNewToDo } from "./to-dos"

function addToDoStorage(title, description) {
    let myArr = []
    if(localStorage.getItem("myToDos")) {
        myArr = JSON.parse(localStorage.getItem("myToDos"))
        myArr.push({title, description})
    } else {
        myArr.push({title, description})
    }
    localStorage.setItem("myToDos", JSON.stringify(myArr))
    document.querySelector(".project-todo-holder").textContent = ''
    for(let u = 0; u < myArr.length; u++) {
        createNewToDo(myArr[u].title, myArr[u].description)
    }
    
}

export { addToDoStorage }