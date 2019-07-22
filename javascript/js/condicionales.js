
'use strict'
//Condicionales IF
var edad = 25;
var nombre = 'Sergio ';
var apellido = 'Rodríguez';
if(edad >= 18){
    console.log("El usuario: " + nombre + apellido + "tiene la edad de: " + edad + " Y es mayor de edad.");

    if(edad <= 33){
        console.log("Todavia eres millenial");
    }else if (edad > 70){
        console.log("Eres anciano");
    } else{
        console.log("Ya no eres millenial");
    }
}else{
    console.log("El usuario: " + nombre + apellido + "tiene la edad de: " +edad +" Y es menor de edad.");
}
//Operadores lógicos
/*
AND (Y): &&
OR (O): ||
NEGACIÓN: !
*/
var year = 2019;

//Negación.
if(year != 2016){
    console.log("El año no es 2016 realmente es: " + year);
}
//AND

if (year == 2000 && year <= 2020 && year != 2019){
    console.log("Estamos en la era actual");
} else{
    console.log("Estamos en la era post moderna");
}
//OR
if (year == 2009 || year == 2019){
    console.log("El año acaba en 9");
}
//CONDICIONAL SWITCH
var edad1 = 15;
var imprime = '';
switch(edad1){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
            imprime = "Ya eres un adulto";
    break;
    case 40:
            imprime = "Crisis de los 40";
    break;
    case 75:
            imprime = "Eres ya un anciano";
    break;

    default:
            imprime = "Tu edad es neutra";
    break;
}
        console.log(imprime);