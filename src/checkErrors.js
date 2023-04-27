function formValidation(title, date) {
    if(title.value === "") {
        return false
    }
    if(date.value === "") {
        return false
    }

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let date2 = String(yyyy + '-' + mm + '-' + dd);

    date = date.value.split("-")
    date2 = date2.split("-")

    let yearToDay = Number(date[0]) * 12 * 30
    let yearToDay2 = Number(date2[0]) * 12 * 30
    let monthToDay = Number(date[1]) * 30
    let monthToDay2 = Number(date2[1]) * 30

    let newDate = yearToDay + monthToDay + Number(date[2])
    let newDate2 = yearToDay2 + monthToDay2 + Number(date2[2])
    
    if(newDate < newDate2) {
        date.value = ""
        return 0
    }

    if(localStorage.getItem("myProjects")) {
        let anotherTitle = JSON.parse(localStorage.getItem("myProjects"))
        for(let i = 0; i < anotherTitle.length; i++) {
            if(anotherTitle[i].title === title.value) {
                return 1
            }
        }
    }
    
}

export { formValidation }