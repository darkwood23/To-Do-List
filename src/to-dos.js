function createNewToDo(holder) {
    const todoHold = document.createElement("div")
    const div1  = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const title = document.createElement("h3")
    const done = document.createElement("label")
    const doneBox = document.createElement("input")
    const expand = document.createElement("div")
    const description = document.createElement("p")

    todoHold.classList.add("todo-hold")
    title.classList.add("todo-title")
    done.classList.add("todo-label-done")
    doneBox.classList.add("todo-checkbox")
    expand.classList.add("todo-expand")
    description.classList.add("todo-description")
    div1.classList.add("div1")
    div2.classList.add("div2")
    div3.classList.add("div3")

    title.textContent = "test"
    done.textContent = "Done:"
    doneBox.type = "checkbox"
    expand.textContent = "^"
    description.textContent = "test"

    div1.appendChild(done)
    div1.appendChild(doneBox)

    div2.appendChild(title)
    div2.appendChild(div1)

    div3.appendChild(expand)
    div3.appendChild(description)

    todoHold.appendChild(div2)
    todoHold.appendChild(div3)

    holder.appendChild(todoHold)
}

export { createNewToDo }