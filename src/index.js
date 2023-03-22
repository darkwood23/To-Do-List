import './style.css'
import notes from './notes.gif'

const everythingHolder = document.getElementById("container")

function ToDo() {

}

ToDo.prototype.createHead = function() {
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

    titleName.textContent = this.title
    line.textContent = this.tagline
    logo.src = this.image

    holder.appendChild(titleName)
    holder.appendChild(line)
    heading.appendChild(logo)
    heading.appendChild(holder)

    everythingHolder.appendChild(heading)
}

function firstPage() {
    this.title = "A-Notes"
    this.tagline = "The only app you need to note down all of your To-Do's"
    this.image = notes
}

firstPage.prototype = Object.create(ToDo.prototype)

const newPage = new firstPage()
newPage.createHead()