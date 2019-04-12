const capabilities = ["Walcz", "Poddaj się"];

const addCapabilities = (e) => {
e.preventDefault();
document.querySelector('input').value
}

const resetCapabilities = (event) => {
event.preventDefault();
capabilities.length = 0;
}

const showCapabilities = () => {
    alert(capabilities.join(" --- --- "))
}

document.querySelector('.add').addEventListener('click', addCapabilities)

document.querySelector('.clean').addEventListener('click', resetCapabilities)

document.querySelector(.showCapabilities).addEventListener('click', showCapabilities)

