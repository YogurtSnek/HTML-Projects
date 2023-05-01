var a;
let b;

a = 5;
b = 10;

var numeros = [1,2,3,4,10,50];
document.writeln("El valor de números [2] es: " + numeros[2]);

var nombres = ["Oreo", "Steph", "Hazel", "Trisha"];
document.writeln("<br>En arreglo nombres el último elemento es: " + nombres[3]);

var mixto = [21, 02, "Hello", true, "a", "Lo que gustes ingresar"];
document.writeln("<br>El valor de mixto [3] es: " + mixto[3]);

document.writeln("<br>");
for (i in mixto) {
    document.writeln("<br>Elemento del mixto [" + i + "] es: " + mixto[i]);
    
}
