import { createNewToDo } from "./to-dos"

// function addToDoStorage(title, description) {
//     let myArr = []
//     if(localStorage.getItem("myToDos")) {
//         myArr = JSON.parse(localStorage.getItem("myToDos"))
//         myArr.push({title, description})
//     } else {
//         myArr.push({title, description})
//     }
//     localStorage.setItem("myToDos", JSON.stringify(myArr))
//     document.querySelector(".project-todo-holder").textContent = ''
//     for(let u = myArr.length; u === 0; u--) {
//         createNewToDo(myArr[u].title, myArr[u].description)
//     }
    
// }

function addToDoStorage(title, description, projectTitle, checked) {
    let n = JSON.parse(localStorage.getItem("myProjects"))
    for(let i = 0; i < n.length; i++) {
        if(n[i].title === projectTitle) {
            let done = checked
            n[i].todo.push({todoTitle : title, description, done})
        }
    }
    localStorage.setItem("myProjects", JSON.stringify(n))
    let newN = JSON.parse(localStorage.getItem("myProjects"))
    for(let u = 0; u < newN.length; u++) {
        if(newN[u].title === projectTitle) {
            document.querySelector(".project-todo-holder").textContent = ''
            for(let nn = 0; nn < newN[u].todo.length; nn++) {
                createNewToDo(newN[u].todo[nn].todoTitle, newN[u].todo[nn].description, projectTitle)
            }
        }
    }
}

export { addToDoStorage }