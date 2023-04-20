function createNewToDo(holder, titleN, descriptionN) {
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