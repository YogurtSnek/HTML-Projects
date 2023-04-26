var valores = [34, 12, 74, 89, 23, 65];
var nombres = ["Silvia", "Daniel", "Cameron", "Zelin", "Valeria", "Quintin"];

document.writeln("Elementos del arreglo <i>valores</i> sin ordenar: " + valores);
document.writeln("<br>Elementos del arreglo <i>nombres</i> sin ordenar: " + nombres);

valores.sort();
document.writeln("<br><br>Elementos del arreglo <i>valores</i> ordenados ascendentemente: " + valores);
nombres.sort();
document.writeln("<br>Elementos del arreglo <i>nombres</i> ordenados ascendentemente: " + nombres);

valores.reverse();
document.writeln("<br><br>Elementos del arreglo <i>valores</i> ordenados descendentemente: " + valores);
nombres.reverse();
document.writeln("<br>Elementos del arreglo <i>nombres</i> ordenados de descendentemente: " + nombres);

document.writeln("<br><br><br>");
document.writeln("<h1>Recorrido en Arreglos</h1>");

document.writeln("Elementos del arreglo <i>valores</i> con <b>forEach()</b>:");
var txt = "";
valores.forEach(miFuncion);
document.writeln(txt);

function miFuncion (value, index, array){
    txt += value + " ";
}

document.writeln("<br><br>Elementos del arreglo <i>valores</i> con <b>map()</b>:");
var numeros = valores.map(miMap);
document.writeln(numeros);

function miMap (value, index, array){
    return value * 2;
}

document.writeln("<br><br>Elementos del arreglo <i>valores</i> con <b>flatmap()</b>:");
var nuevoArr = valores.flatMap((x) => x * 4);
document.writeln(nuevoArr);

document.writeln("<br><br>Elementos del arreglo <i>valores</i> con <b>filter()</b>");
var menores = valores.filter(miFiltro);
document.writeln("<br>Solo aparecen los valores menores de 50: " + menores);

function miFiltro(value, index, array){
    return value < 50;
}

document.writeln("<br><br>Elementos del arreglo <i>valores</i> con <b>reduce()</b>");
var suma = valores.reduce(miSuma);
document.writeln("<br>Suma total de los elementos: " + suma);

function miSuma(total, value, index, array){
    return total + value;
}