function formValidation(first, second) {
    if(first.value === "") {
        return false
    }
    if(second.value === "") {
        return false
    }
    let today = new Date()
    let month = today.getMonth()
    let year = today.getFullYear()
    let date = today.getDate()
    let current_time = Number(`${year}${month}${date}`)
    let dateEntered = second.value.replace(/-/g, "")
    console.log(dateEntered, current_time)
    console.log(dateEntered - current_time)
    if(Number(dateEntered) - current_time < 0) {
        return false
    }
}

export { formValidation }