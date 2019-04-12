const capabilities = ["Walcz", "Poddaj się"];

const resetCapabilities = (event) => {
event.preventDefault();
capabilities.length = 0;
}

const showCapabilities = () => {
    alert(capabilities.join(" --- --- "))
}

document.querySelector(.showCapabilities).addEventListener('click', showCapabilities)

const addCapabilities = (e) => {
const input = document.querySelector('input');



}

document.querySelector('add').addEventListener('click', addCapabilities)