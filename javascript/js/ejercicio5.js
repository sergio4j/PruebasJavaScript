
'use strict'

/*
Mostrar todos los numeros divisores de un numero
introducido por pantalla.
*/

var numero = parseInt(prompt("Introduce el numero 1",0));

for (var i = 1; i <= numero; i++){
    if (numero%i == 0){
        console.log("Divisor: " + i);

    }

}