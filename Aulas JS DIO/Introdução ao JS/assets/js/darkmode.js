function changeMode() {
    changeClasses()
    changeText()
}

function changeClasses() {
    body.classList.toggle(darkModeClass)
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)

}

function changeText() {
    const lighMode = "Light mode"
    const darkMode = "Dark mode"
    
    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lighMode
        h1.innerHTML = darkMode + ' ON'
        return;
    }

    button.innerHTML = darkMode
    h1.innerHTML = lighMode + ' ON'

}

const darkModeClass = 'dark-mode'


const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]



button.addEventListener('click', changeMode)