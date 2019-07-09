
'use strict'

//Bucle FOR

var numeros = 100;

for(var i = 0; i <= numeros; i++){
    console.log("Vamos por el numero: " + i);
}

//Bucle while

var year = 2019;
while(year <= 2050) {
    console.log("Estamos en el año " + year);
    if(year == 2020){
        break;
    }
    year++;
}

//Bucle do while
var years = 20;
do{
    alert("Solo cuando sea diferente a 20");
    years = 20;
}while (years != 20)


