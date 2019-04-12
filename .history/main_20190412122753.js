const capabilities = ['walcz', 'poddaj się'];

const showAdvice = () => {
    const index = Math.floor(Math.random() * capabilities.length )
}

const addCapabilities = (e) => {
e.preventDefault();
const input = document.querySelector('input');
capabilities.push(input.value)
alert (`dodana została opcja ${input.value}`);
input.value = "";
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

document.querySelector(.showAdvice).addEventListener('click', showAdvice)

document.querySelector('.showCapabilities').addEventListener('click', showCapabilities)

