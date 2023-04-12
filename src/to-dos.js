function displayToDo(titleName, range, elementName) {
    const toDoHolder = document.createElement("div")
    const title = document.createElement("h1")
    const toDoS = document.createElement("div")
    const addToDo = document.createElement("button")
    const backButton = document.createElement("button")

    for(i = 0; i <= range; i++) {
        let toDo = document.createElement("div")
        let toDoTitle = document.createElement("h3")
        let descriptionHolder = document.createElement("div")
        let description = document.createElement("p")
        let checkBoxHolder = document.createElement("div")
        let checkBoxLabel = document.createElement("label")
        let checkBox = document.createElement("input")
        let timeDateHolder = document.createElement("div")
        let time = document.createElement("h4")
        let date = document.createElement("h4")
        let expand = document.createElement("div")

        toDo.id = "todo-item-" + String(i)
        toDoTitle.id = "todo-title-" + String(i)
        checkBox.id = "check-box-" + String(i)
        time.id = "time" + String(i)
        date.id = "time" + String(i)

        toDo.classList.add("to-do")
        toDoTitle.classList.add("to-do-title")
        descriptionHolder.classList.add("description-holder")
        description.classList.add("description")
        checkBoxHolder.classList.add("check-box-holder")
        checkBoxLabel.classList.add("check-box-label")
        checkBox.classList.add("check-box")

        timeDateHolder.classList.add("time-date-holder")
        time.classList.add("time")
        date.classList.add("date")
        expand.classLista.add("expand")

        expand.appendChild(descriptionHolder)
        descriptionHolder.appendChild(description)

        checkBoxHolder.appendChild(checkBoxLabel)
        checkBoxHolder.appendChild(checkBox)

        timeDateHolder.appendChild(date)
        timeDateHolder.appendChild(time)

        toDo.appendChild(toDoTitle)
        toDo.appendChild(timeDateHolder)
        toDo.appendChild(checkBox)
        toDo.appendChild(expand)
        toDoS.appendChild(toDo)
    }
}