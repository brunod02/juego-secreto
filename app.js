let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Has adivinado el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Mensaje de error si el número no es válido.
        if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es mayor. Inténtalo de nuevo.');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor. Inténtalo de nuevo.');
        } intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los números.
 if (listaNumeros.length === numeroMaximo) {
    asignarTextoElemento('p', 'Todos los números han sido sorteados. Reinicia el juego para comenzar de nuevo.');
 } else {
        //Si el numero generado esta incluido en la lista de numeros.
        console.log(numeroGenerado);
        console.log(listaNumeros);

        if (listaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;

        }
    }
}    
    function condicionesIniciales() {
        asignarTextoElemento('h1', 'Juego del número secreto');
        asignarTextoElemento('p', `Elige un número entre 1 y ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
    } 



function reiniciarJuego() {
// limpia la caja de texto
    limpiarCaja();
// mensaje de intervalo de numeros
// reinicia el contador de intentos
// genera un nuevo numero secreto
    condicionesIniciales();
// deshabilita el boton reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
 
}

condicionesIniciales();
