import arrow from './arrow-left.svg'
import { getToDoForm } from './todoform'
import { createNewToDo } from './to-dos'
function displayProjectInfo(title, deadline, priority) {
    const container = document.getElementById("container")
    container.textContent = ""
    
    const head = document.createElement("div")
    const name = document.createElement("h1")
    const dueDate = document.createElement("h2")
    const priorityHolder = document.createElement("div")
    const priorityName = document.createElement("h2")
    const priorityLevel = document.createElement("h2")
    const back = document.createElement("img")
    const todoHolder = document.createElement("div")
    const newTodoCreater = document.createElement("div")
    const body = document.createElement("div")
    const save = document.createElement("button")
    
    head.classList.add("project-head")
    name.classList.add("project-name")
    dueDate.classList.add("project-dueDate")
    save.id = "save-btn"
    priorityHolder.classList.add("project-priority-holder")
    priorityName.classList.add("project-priority-name")
    back.classList.add("project-back")
    todoHolder.classList.add("project-todo-holder")
    newTodoCreater.classList.add("circle")
    body.classList.add("body")
    if(priority.textContent === "Moderate") {
        priorityLevel.classList.add("moderate")
    } else if (priority.textContent === "High") {
        priorityLevel.classList.add("high")
    } else {
        priorityLevel.classList.add("low")
    }

    newTodoCreater.addEventListener("click", function() {
        getToDoForm(title)
    })

    back.addEventListener("click", function() {
        location.replace("../dist/index.html")
    })  

    back.src = arrow
    name.textContent = title.textContent
    dueDate.textContent = "Deadline: " + deadline.textContent
    priorityName.textContent = "Priority: "
    priorityLevel.textContent = priority.textContent

    priorityHolder.appendChild(priorityName)
    priorityHolder.appendChild(priorityLevel)

    head.appendChild(back)
    head.appendChild(name)
    head.appendChild(dueDate)
    head.appendChild(priorityHolder)

    body.appendChild(todoHolder)
    body.appendChild(newTodoCreater)

    container.appendChild(head)
    container.appendChild(body)

    let names = []
    

    if(localStorage.getItem("myProjects")) {
        let newN = JSON.parse(localStorage.getItem("myProjects"))
        
        for(let u = 0; u < newN.length; u++) {
            if(newN[u].title === title.textContent) {
                document.querySelector(".project-todo-holder").textContent = ''
                for (let nn = 0; nn < newN[u].todo.length; nn++) {
                    for(let ii = 0; ii < newN[u].todo[nn].names.length; ii++) {
                        names.push(newN[u].todo[nn].names[ii])
                    }
                    createNewToDo(newN[u].todo[nn].todoTitle, newN[u].todo[nn].description, newN[u].todo[nn].done, names)
                }
            }
        }
    }
}

export { displayProjectInfo }