function formValidation(first, second) {
    let today = new Date()
    let mm = today.getMonth()
    let yy = today.getFullYear()
    let date = today.getDate()
    let currentDate = `${yy}${mm}${date}`
    let dateInput = second.value.replace(/-/g, "")
    if(Number(dateInput) - Number(currentDate) < 0) {
        console.log(Number(dateInput) - Number(currentDate))
        return false
    }
    if(first.value === "") {
        return false
    }
    if(second.value === "") {
        return false
    }
}

export { formValidation }