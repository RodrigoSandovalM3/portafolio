function toggleTheme() {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    const isDarkTheme = document.body.classList.contains('dark');
    localStorage.setItem('darkTheme', isDarkTheme);
}

const btnSwitch = document.querySelector('#switchTema');
console.log(btnSwitch);
btnSwitch.addEventListener('click', toggleTheme);

const storedTheme = localStorage.getItem('darkTheme');

if (storedTheme === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}


function encriptarTexto() {
    var textoOriginal = document.querySelector('.editable-div').innerText;
    var textoEncriptado = btoa(textoOriginal);
    var cajaEncriptador = document.getElementById('mensajeEncriptado');

    
    cajaEncriptador.classList.remove('cajaEncriptador');
    cajaEncriptador.classList.add('cajaEncriptador2');

    
    cajaEncriptador.innerText = textoEncriptado;

    cajaEncriptador.setAttribute('contenteditable', 'true');
}

// document.addEventListener('DOMContentLoaded', function() {
//     const header = document.getElementById('miHeader');

//     header.addEventListener('mouseover', function() {
//         header.classList.add('abierto');
//     });

//     header.addEventListener('mouseout', function() {
//         header.classList.remove('abierto');
//     });
// });


function desencriptarTexto() {
    var textoEncriptado = document.getElementById('mensajeEncriptado').innerText;
    var textoDesencriptado = atob(textoEncriptado);
    var cajaEncriptador = document.getElementById('mensajeEncriptado');

    // Cambiar la clase de la caja
    cajaEncriptador.classList.remove('cajaEncriptador');
    cajaEncriptador.classList.add('cajaEncriptador2');

    // Mostrar el texto desencriptado
    cajaEncriptador.innerText = textoDesencriptado;

    // Activar contenteditable
    cajaEncriptador.setAttribute('contenteditable', 'true');
}