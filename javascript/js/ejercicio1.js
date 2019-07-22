'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales.
Si los numeros no son numeros o son menores o iguales a 0 que vuelvan a pedir numeros.
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero ", 0));

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN (numero2)){
     numero1 = parseInt(prompt("Introduce el primer numero", 0));
     numero2 = parseInt(prompt("Introduce el segundo numero ", 0));
}

if (numero1 > numero2){
    console.log("El numero primero " + numero1 + " Es mayor que el numero segundo " + numero2 );
} else if(numero1 == numero2){
    console.log("El numero primero " + numero1 + " Es igual que el segundo numero " + numero2);
}else{
    console.log("El numero primero " + numero1 + " Es menor que el numero segundo " + numero2);
}
