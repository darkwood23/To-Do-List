function addToStorage() {
    const submitBtn = document.getElementById("submit-btn")
    console.log(document.getElementById("title").value, document.getElementById("priority").value)
    submitBtn.addEventListener("click", function(){
        localStorage.setItem("title", document.getElementById("title").value)
        localStorage.setItem("priority", document.getElementById("priority").value)
        localStorage.setItem("due-date", document.getElementById("date").value)
    })
}

export {addToStorage}