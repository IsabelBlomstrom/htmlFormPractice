window.addEventListener('load', main)

/**
 * @type {HTMLFormElement}
 */
let form



function main() {
    loadGlobalVariables()
    setupEventListeners()
    loadDataFromLocalStorage()
}

function loadGlobalVariables() {
    form = document.querySelector('form')
}

function setupEventListeners() {
    const inputs = form.querySelectorAll('input')
    for(const input of inputs) {
        input.addEventListener('input', saveToLocalStorage)

    }

    form.addEventListener('submit', onSubmitForm)
}

function loadDataFromLocalStorage() {
    const inputs = form.querySelectorAll('input')
    for(const input of inputs) {
        input.value = localStorage.getItem(input.id)

    }
}

/**
 * @param {event}
 */
function saveToLocalStorage(event) {
    const input = event.target
    localStorage.setItem(input.id, input.value)
}

/**
 * @param {event}
 */
function onSubmitForm(event) {
    event.preventDefault()
    localStorage.removeItem(input.id)
    input.value = ""
}

