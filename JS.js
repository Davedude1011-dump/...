var scrollNum = 1

window.addEventListener('keydown', (event) => {
    if (event.key === 's' && event.ctrlKey) {
        event.preventDefault()
        if (scrollNum === 1) {
            scrollNum += 1
            document.getElementById("image").src = "images/googleLight.jpg"
        }
        else if (scrollNum === 2) {
            scrollNum = 1
            document.getElementById("image").src = "images/googleDark.jpg"
        }
    }
})
document.addEventListener('contextmenu', event => event.preventDefault());