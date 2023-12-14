import { getInformation } from "./add-to-localStorage"
import { formValidation } from "./checkErrors"

function displayForm(list) {
    const formHolder = document.getElementById("form")
    formHolder.textContent = ""
    const form = document.createElement("form")

    const first = document.createElement("div")
    const title = document.createElement("label")
    const titleInput = document.createElement("input")

    const second = document.createElement("div")
    const priority = document.createElement("label")
    const select = document.createElement("select")
    const low = document.createElement("option")
    const moderate = document.createElement("option")
    const high = document.createElement("option")

    const third = document.createElement("div")
    const dueDate = document.createElement("label")
    const dueDateInput = document.createElement("input")
    
    const peopleHolder = document.createElement("div")
    const howManyQuestion = document.createElement("label")
    const howMany = document.createElement("input")
    const namesHolder = document.createElement("div")
    const nameQuestion = document.createElement("label")
    const names = document.createElement("input")

    const submitBtn = document.createElement("button")
    const cancel = document.createElement("button")
    const div1 = document.createElement("div")

    title.classList.add("form-label")
    priority.classList.add("form-label")
    dueDate.classList.add("form-label")
    div1.classList.add("div1")

    form.action = "add-project"
    form.method = "post"
    form.id = "add_project"

    form.classList.add("formE")
    formHolder.classList.add("formH")

    first.id = "first"
    title.setAttribute('for', 'title')
    title.textContent = "Title:"
    titleInput.type = "text"
    titleInput.id = "title"
    titleInput.name = "project_title"
    titleInput.required.valueOf(true)
    howMany.type = "number"

    second.id = "second"
    priority.setAttribute('for', 'priority')
    priority.textContent = "Priority:"
    select.name = "priority"
    select.id = "priority"
    select.required = true
    low.value = "Low"
    low.textContent = "Low"
    moderate.value = "Moderate"
    moderate.textContent = "Moderate"
    high.value = "High"
    high.textContent = "High"

    third.id = "third"
    dueDate.setAttribute('for', 'due-date')
    dueDate.textContent = "Due Date:"
    dueDateInput.type = "date"
    dueDateInput.id = "date"
    dueDateInput.name = "project_due_date"
    dueDateInput.required = true

    peopleHolder.classList.add("people-holder")
    howManyQuestion.classList.add("how-many-question")
    howMany.id = "how-many"
    namesHolder.classList.add("names-holder")
    nameQuestion.classList.add("name-question")
    names.id = "names"

    howManyQuestion.textContent = "No. of people: "
    nameQuestion.textContent = "Names: "
    howMany.value = 1
    names.placeholder = "Seperate by commas no-space"

    submitBtn.type = "button"
    submitBtn.id = "submit-btn"
    submitBtn.classList.add("submit-btn")
    submitBtn.textContent = "Submit"
    submitBtn.addEventListener("click", function() {
        let validate = formValidation(titleInput, dueDateInput, howMany, names)
        if(validate === false) {
            alert("Please enter all the data")
        } else if (validate === undefined) {
            getInformation(list)
            container.style.display = "grid"
            formHolder.style.display = "none"
        } else {
            alert(validate)
        }
    })
    cancel.type = "button"
    cancel.id = "cancel"
    cancel.classList.add("cancel")
    cancel.textContent = "Cancel"

    cancel.addEventListener("click", function() {
        container.style.display = "grid"
        formHolder.style.display = "none"
    })

    container.style.display = "none"
    formHolder.style.display = "flex"

    first.appendChild(title)
    first.appendChild(titleInput)

    select.appendChild(low)
    select.appendChild(moderate)
    select.appendChild(high)
    second.appendChild(priority)
    second.appendChild(select)

    third.appendChild(dueDate)
    third.appendChild(dueDateInput)

    namesHolder.appendChild(nameQuestion)
    namesHolder.appendChild(names)

    peopleHolder.appendChild(howManyQuestion)
    peopleHolder.appendChild(howMany)
    peopleHolder.appendChild(namesHolder)

    div1.appendChild(submitBtn)
    div1.appendChild(cancel)

    form.appendChild(first)
    form.appendChild(second)
    form.appendChild(third)
    form.appendChild(peopleHolder)
    form.appendChild(div1)

    formHolder.appendChild(form)
}

export { displayForm }