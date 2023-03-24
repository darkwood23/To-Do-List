function displayForm() {
    const form = document.getElementById("form")
    const container = document.getElementById("container")
    const cancel = document.getElementById("cancel")

    cancel.addEventListener("click", function() {
        container.style.display = "grid"
        form.style.display = "none"
    })

    container.style.display = "none"
    form.style.display = "flex"
}

export { displayForm }