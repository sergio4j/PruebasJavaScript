'use strict'

/*
Hacer un programa que diga si un numero es par o impar,
1.Ventana promp
2. si no es valido que vuelva a pedir el numero.
*/
var numero = parseInt(prompt("Introduce un numero",0));

while(isNaN(numero)){
    var numero = parseInt(prompt("Introduce un numero",0));

}

if(numero % 2 == 0){
    console.log("El numero " + numero +" Numero par");
}else{
    console.log("El numero " + numero +" Numero Impar");
}