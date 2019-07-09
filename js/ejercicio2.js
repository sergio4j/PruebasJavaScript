'use strict'
/*

Utilizando un bucle mostrar la media y la suma de los resultados introducidos por el usuario
hasta que el usuario introduzca un numero negativo y mostrar resultado.
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros hasta que introduzcas uno negativo",0));

    if(isNaN(numero)){
        numero = 0;
    } else if(numero >= 0 ){
        suma = suma + numero;

        contador++;
    }
    console.log("La suma es: " + suma + " El numero de veces que has introducido numeros es: " + contador 
     + " Media total de "+ suma/contador);
}while(numero >= 0 )

