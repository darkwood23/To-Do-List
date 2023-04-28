function createNewToDo(titleN, descriptionN, ddone) {
    const holder = document.querySelector(".project-todo-holder")
    
    const todoHold = document.createElement("div")
    const div1  = document.createElement("div")
    const div2 = document.createElement("div")
    const title = document.createElement("h3")
    const done = document.createElement("label")
    const doneBox = document.createElement("input")
    const description = document.createElement("p")
    const br = document.createElement("hr")

    todoHold.classList.add("todo-hold")
    title.classList.add("todo-title")
    done.classList.add("todo-label-done")
    doneBox.classList.add("todo-checkbox")
    description.classList.add("todo-description")
    div1.classList.add("divOne")
    div2.classList.add("div2")

    title.textContent = titleN
    done.textContent = "Done:"
    doneBox.type = "checkbox"
    description.textContent = descriptionN

    if(ddone === true) {
        doneBox.checked = true
        doneBox.disabled = true
    }

    doneBox.addEventListener("click", function() {
        if(doneBox.checked === true) {
            let local = JSON.parse(localStorage.getItem("myProjects"))
            for(let i = 0; i < local.length; i++) {
                for(let u = 0; u < local[i].todo.length; u++) {
                    if(local[i].todo[u].todoTitle === titleN) {
                        local[i].todo[u].done = true
                    }
    
                }
            }
            localStorage.setItem("myProjects", JSON.stringify(local))

        } else {
            let local = JSON.parse(localStorage.getItem("myProjects"))
            for(let i = 0; i < local.length; i++) {
                for(let u = 0; u < local[i].todo.length; u++) {
                    if(local[i].todo[u].todoTitle === titleN) {
                        local[i].todo[u].done = false
                    }
    
                }
            }
            localStorage.setItem("myProjects", JSON.stringify(local))
        }
    })

    div1.appendChild(done)
    div1.appendChild(doneBox)

    div2.appendChild(title)
    div2.appendChild(br)
    div2.appendChild(div1)

    todoHold.appendChild(div2)
    todoHold.appendChild(br)
    todoHold.appendChild(description)

    holder.appendChild(todoHold)
}

export { createNewToDo }