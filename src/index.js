import './style.css'
import notes from './notes.gif'

const everythingHolder = document.getElementById("container")
let projects = [{name: "th", priority: "High", deadline: "14th October"}, {name: "th", priority: "High", deadline: "14th October"}, {name: "th", priority: "High", deadline: "14th October"}, {name: "th", priority: "High", deadline: "14th October"}]

const ToDo = () => {
    const createTitle = (title, tagline, image) => {
        const heading = document.createElement("div")
        const titleName = document.createElement("h1")
        const logo = new Image()
        const holder = document.createElement("div")
        const line = document.createElement("p")
        
        heading.classList.add("header")
        titleName.classList.add("title")
        logo.classList.add("logo")
        holder.classList.add("holder")
        line.classList.add("tag-line")
        
        titleName.textContent = title
        line.textContent = tagline
        logo.src = image

        holder.appendChild(titleName)
        holder.appendChild(line)
        heading.appendChild(logo)
        heading.appendChild(holder)
        everythingHolder.appendChild(heading)
    }
    
    const createPage = () => {
        const projectHolder = document.createElement("div")
        const newProjectCreater = document.createElement("button")

        newProjectCreater.textContent = "New Project"
        newProjectCreater.id = "project-creator-btn"

        projectHolder.id = "project-holder"

        for(let i = 0; i < projects.length; i++) {
            let project = document.createElement("div")
            let projectTitle = document.createElement("h3")

            let projectDeadLineHolder = document.createElement("div")
            let projectDeadLineDisplayer = document.createElement("h4")
            let projectDeadLine = document.createElement("h4")

            let projectPriorityHolder = document.createElement("div")
            let projectPriorityDisplayer = document.createElement("h4")
            let projectPriority = document.createElement("h4")

            project.classList.add("projects")
            projectTitle.classList.add("project-title")
            projectDeadLineHolder.classList.add("deadline-holder")
            projectPriorityHolder.classList.add("priority-holder")

            projectDeadLine.id = "deadline of " + projects[i].name
            projectPriority.id = "priority of " + projects[i].name

            projectTitle.textContent = projects[i].name
            projectDeadLineDisplayer.textContent = "Deadline:"
            projectDeadLine.textContent = projects[i].deadline
            projectPriorityDisplayer.textContent = "Priority:"
            projectPriority.textContent = projects[i].priority

            projectDeadLineHolder.appendChild(projectDeadLineDisplayer)
            projectDeadLineHolder.appendChild(projectDeadLine)
            projectPriorityHolder.appendChild(projectPriorityDisplayer)
            projectPriorityHolder.appendChild(projectPriority)

            project.appendChild(projectTitle)
            project.appendChild(projectDeadLineHolder)
            project.appendChild(projectPriorityHolder)

            projectHolder.appendChild(project)
        }

        projectHolder.appendChild(newProjectCreater)
        everythingHolder.appendChild(projectHolder)
    }
    return {createTitle, createPage}
}

const oneProject = ToDo()
oneProject.createTitle("A-Notes", "The only app you need to note down all of your To-Do's", notes)
oneProject.createPage()