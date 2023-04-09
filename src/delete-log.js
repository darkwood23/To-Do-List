import { addToStorage } from "./add-to-localStorage"

function deleteLogs(key) {
    let sure = confirm("Are you sure you want to delete this project?")
    if(sure) {
        let projects = JSON.parse(localStorage.getItem("myProjects"))
        projects.splice(key, 1)
        addToStorage(projects)
    } else {
        return
    }
}

export { deleteLogs }