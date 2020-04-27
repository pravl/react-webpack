import test from "./test"
import WelcomeMsg from "./welcomeMsg"

document.addEventListener("DOMContentLoaded", function(event) {
    const element = document.createElement('h1')
    element.innerHTML = "Hello World"
    document.body.appendChild(element)
  })

  new WelcomeMsg().sayHello()

