
'use stric'

/* tabla de multiplicar de un numero introducido por pantalla */

/*
var numero = parseInt(prompt("Introduce un número",1));
var limite = 10;
    document.write("<h1> Tabla del: " + numero + "</h1> " +"<br/>");
for(var i = 1; i <=10; i++){

   document.write( numero + " * "+ i + " " + " = " + (numero*i + "<br/>"));
}
*/

/* TODAS LAS TABLAS DEL 1 AL 10 */
document.write(" TABLAS DE MULTIPLICAR <br/>");
for (var i = 1; i <= 10; i++){

     document.write("TABLA DEL:" + i + "<br/> ");
    for(numero = 1; numero <= 10; numero++){
         document.write(i + " * " + numero + " = " + (i*numero) + "<br/>");   
     }
}