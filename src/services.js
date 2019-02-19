export function saveToStorage(name, data) {
    const dataString = JSON.stringify(data)
    localStorage.setItem(name, dataString)
}

export function loadFromStorage(name) {
    const dataString = localStorage.getItem(name)
    return JSON.parse(dataString)

}