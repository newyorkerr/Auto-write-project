const container = document.getElementById("text")
const text = "You read a text with 300ms between each character! "
const limit = text.length
const interval = 300
let index = 0

const idInterval = setInterval(function () {
    console.log(index)
    if (index <= limit) {
        container.innerText = text.slice(0, index++)
    } else {
        clearInterval(idInterval)
    }
}, interval)