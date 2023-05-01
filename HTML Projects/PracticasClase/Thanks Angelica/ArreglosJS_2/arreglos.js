var arreglo1 = [45, 23, 76, 234];
var arreglo2 = ["Arroz", "Centeno", "Avena", "Trigo"];

document.writeln(arreglo2);
document.writeln("<br>");
document.writeln(arreglo2.join("*"));

/*
arreglo2.pop(); //borra el último elemento
document.writeln("<br>");
document.writeln(arreglo2);
*/

elementoBorrado = arreglo2.pop();
document.writeln("<br>");
document.writeln("Se eliminó el <i>" + elementoBorrado + "</i> del arreglo [" + arreglo2 + "]");

arreglo2.push("Trigo");
document.writeln("<br>");
document.writeln(arreglo2);

arreglo2.push("Maíz");
document.writeln("<br>");
document.writeln(arreglo2);

arreglo2.shift(); //borra el primer elemento
document.writeln("<br>");
document.writeln("Borrando el primer elemento: [" + arreglo2 + "]");

arreglo2.unshift("Arroz");
document.writeln("<br>");
document.writeln("Recuperando el elemento borrado: " + arreglo2);

//otra forma de agregar elemento
arreglo2[arreglo2.length] = "Ajonjolí";
document.writeln("<br>");
document.writeln(arreglo2);

//borra el elemento pero no borra su posición
delete arreglo2[2];
document.writeln("<br>");
document.writeln(arreglo2);

//agregando en la posición sin elemento
arreglo2[2] = "Amaranto";
document.writeln("<br>");
document.writeln(arreglo2);

var arreglos;
arreglos = arreglo1.concat(arreglo2);
document.writeln("<br>Concatenando dos arreglos: " + arreglos);

//en la posición dos se agregan dos elementos
arreglo2.splice(2, 0, "Mango", "Limón");
document.writeln("<br>");
document.writeln(arreglo2);

document.writeln("<br>Convirtiendo el arreglo en una cadena: " + arreglo2.toString());