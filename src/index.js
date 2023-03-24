import './style.css'
import notes from './notes.gif'
import { displayForm } from './display-form'

const everythingHolder = document.getElementById("container")
let projects = [{name: "th", priority: "High", deadline: "14th October"}, 
                {name: "th", priority: "Low", deadline: "14th October"}, 
                {name: "th", priority: "Moderate", deadline: "14th October"}, 
                {name: "th", priority: "High", deadline: "14th October"}]

const ToDo = () => {
    const getDaDates = () => {
        let today = new Date()
        let month = today.getMonth()
        let year = today.getFullYear()
        let date = today.getDate()
        let current_time = `${month}/${date}/${year}`
        return {current_time}
    }
    const createTitle = (title, tagline, image) => {
        const heading = document.createElement("div")
        const titleName = document.createElement("h1")
        const logo = new Image()
        const holder = document.createElement("div")
        const line = document.createElement("p")
        const dateHolder = document.createElement('h2')
        
        heading.classList.add("header")
        titleName.classList.add("title")
        logo.classList.add("logo")
        holder.classList.add("holder")
        line.classList.add("tag-line")
        dateHolder.classList.add("date")
        
        titleName.textContent = title
        line.textContent = tagline
        logo.src = image
        dateHolder.textContent = getDaDates().current_time

        holder.appendChild(titleName)
        holder.appendChild(line)
        heading.appendChild(logo)
        heading.appendChild(holder)
        heading.appendChild(dateHolder)
        everythingHolder.appendChild(heading)
    }
    
    const createPage = (projects) => {
        const projectHolder = document.createElement("div")
        const newProjectCreater = document.createElement("button")

        newProjectCreater.textContent = "New Project"
        newProjectCreater.id = "project-creator-btn"
        newProjectCreater.onclick = displayForm

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

            projectTitle.id = projects[i].name
            projectDeadLine.id = "deadline of " + projects[i].name
            projectPriority.id = "priority of " + projects[i].name

            projectTitle.textContent = projects[i].name
            projectDeadLineDisplayer.textContent = "Deadline:"
            projectDeadLine.textContent = projects[i].deadline
            projectPriorityDisplayer.textContent = "Priority:"
            projectPriority.textContent = projects[i].priority

            if (projectPriority.textContent === "High"){
                projectPriority.classList.add("high")
            } else if (projectPriority.textContent === "Moderate"){
                projectPriority.classList.add("moderate")
            } else {
                projectPriority.classList.add("low")
            }

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
oneProject.createPage(projects)