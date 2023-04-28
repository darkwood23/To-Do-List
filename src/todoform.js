import { addToDoStorage } from "./todo-localStorage"

function getToDoForm(projectTitle) {
    const ctnHolder = document.getElementById("container")
    const formE = document.getElementById("form")
    
    ctnHolder.style.display = 'none'
    formE.textContent = ""
    formE.style.display = "block"
    
    const formHolder = document.createElement("div")
    const form = document.createElement("form")

    const div1 = document.createElement("div")
    const title = document.createElement("label")
    const titleInput = document.createElement("input")

    const div2 = document.createElement("div")
    const description = document.createElement("label")
    const textArea = document.createElement("textarea")

    const submitBtn = document.createElement("button")
    const cancel = document.createElement("button")

    formHolder.id = "todo-form-all"
    form.id = "todo-form"
    title.id = "todo-title"
    titleInput.id = "todo-title-input"
    description.id = "todo-description"
    textArea.id = "todo-textArea"
    submitBtn.id = "submit-button"
    cancel.id = "cancel-button"
    div1.id = "divOne"
    div2.id = "divTwo"

    titleInput.type = "text"
    submitBtn.type = "button"

    title.textContent = "Title:"
    description.textContent = "Description:"
    submitBtn.textContent = "Submit"
    cancel.textContent = "Cancel"
    textArea.cols = "54"
    textArea.rows = "10"

    cancel.classList.add("cancel")
    submitBtn.classList.add("submit-btn")

    submitBtn.addEventListener("click", function() {
        let val

        let storage = JSON.parse(localStorage.getItem("myProjects"))
        for(let i = 0; i < storage.length; i++) {
            for(let u = 0; u < storage[i].todo.length; u++) {
                if(storage[i].todo[u].todoTitle === titleInput.value) {
                    alert("The title entered is already being used please use another title")
                    val = false
                }
            }
        }

        if(titleInput.value === "" || textArea.value === "") {
            alert("Please enter all the data(s)")
            val = false
        }

        if(val != false) {
            let titleN = titleInput.value
            let descriptionN = textArea.value
    
            addToDoStorage(titleN, descriptionN, projectTitle.textContent, false)
    
            ctnHolder.style.display = "flex"
            formE.style.display = "none"
            ctnHolder.style.flexDirection = "column"

        }

    })

    cancel.addEventListener("click", function() {
        ctnHolder.style.display = "flex"
        formE.style.display = "none"
        ctnHolder.style.flexDirection = "column"
    })

    div1.appendChild(title)
    div1.appendChild(titleInput)

    div2.appendChild(description)
    div2.appendChild(textArea)

    form.appendChild(div1)
    form.appendChild(div2)

    formHolder.appendChild(form)
    formHolder.appendChild(submitBtn)
    formHolder.appendChild(cancel)
    
    formE.appendChild(formHolder)
}

export { getToDoForm }