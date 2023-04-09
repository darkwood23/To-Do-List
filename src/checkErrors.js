function formValidation(first, second) {
    if(first.value === "") {
        return false
    }
    if(second.value === "") {
        return false
    }
}

export { formValidation }