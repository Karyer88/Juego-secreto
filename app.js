let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let intentosMaximos = 3;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//declaración de funcion
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
 
    console.log(intentos);
    if (numeroUsuario === numeroSecreto) {//el usuario acerto el número, le notificamos que acertó
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{//el usuario no acerto el numero, indicamos si el número secreto es mayor o menor
        if (numeroUsuario>numeroSecreto) {
           asignarTextoElemento('p', 'El número secreto es menor'); 
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
    }
    intentos++;//determina el número de intestos hechos para descifrar el número secreto
   limpiarCaja();//despues de enviar el numero se llama a esta funcion para que se limpie la caja
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value ='';
}
function generarNumeroSecreto() {//genera un número secreto aleatorio del 1 al 10
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya se sortearon todos los numeros mostramos un mensaje con esta leyenda
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
     }else{
        // si el numero generado esta incluido en la lista la funcion 
        //se autollama para generar un numero numero aleatorio (return generar#secreto)
         if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto()
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}:`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

//cuando terminamos el juego se habilita el boton de reiniciar juego
//se limpiara la caja---  se indica mensaje del intervalo de #---generar nuevo # aleatorio---desabilitar boton reiniciar juego---reiniciar el # de intentos
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
//mensajes en pantalla


function limpiarCaja() {//función para que la caja donde se digita el número se limpie despues de usarla el ''; significa que el calor es nulo(vacio)
  let valorCaja = document.getElementById('valorUsuario').value = '';
 }

 


