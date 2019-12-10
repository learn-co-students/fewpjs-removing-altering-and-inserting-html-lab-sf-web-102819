let element = document.querySelector("main");
element.remove()

let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)

newHeader.setAttribute("id", "victory")

let a = document.querySelector("h1#victory")
a.innerHTML = `Danny is the champion`