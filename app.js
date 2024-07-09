let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados= [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHtml=document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto);*/
    console.log(numeroSecreto);
    console.log(intentos);
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Felicidades Acertaste en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   else {
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        } else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos ++;
        limpiarCaja();       
    }
return;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de nuemros
    //generar el numero aleatorio
    //numeroSecreto = generarNumeroSecreto();
    //inicializar el numero de intentos
    //intentos=1;
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);   

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numero posibles FIN DEL JUEGO');
    }else{
//si el numero generado esta incluido en la lista
if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
}else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}
    }

}
function condicionesIniciales(){
    asignarTextoElemento('h1','JUEGO: Adivina el número');
    asignarTextoElemento('p',`PORFAVOR INDIQUE UN NUMERO DEL 1 AL ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
condicionesIniciales();