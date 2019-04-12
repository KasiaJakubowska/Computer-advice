const capabilities = [];

const showAdvice = () => {
    const index = Math.floor(Math.random() * capabilities.length )
    document.querySelector('h1').textContent = capabilities[index];
}

const addOption = (e) => {
e.preventDefault();
const input = document.querySelector('input');
capabilities.push(input.value)
alert (`dodana została opcja ${input.value}`);
input.value = "";
}

const resetCapabilities = (event) => {
event.preventDefault();
capabilities.length = 0;
document.querySelector('h1').textContent = ""
}

const showOptions = () => {
    alert(capabilities.join(" --- --- "))
}

document.querySelector('.add').addEventListener('click', addOption)

document.querySelector('.clean').addEventListener('click', resetCapabilities)

document.querySelector('.showAdvice').addEventListener('click', showAdvice)

document.querySelector('.showOptions').addEventListener('click', showOptions)

