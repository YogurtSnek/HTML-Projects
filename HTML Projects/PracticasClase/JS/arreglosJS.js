const PI = 3.14159;
var f = new Date();
var fecha = f.toDateString();
document.writeln(f);
document.writeln("<br>"+fecha)
var arreglo1 = [12, 234, 4,66,3];
arreglo1[2] = 333;
for (i in arreglo1) {
    document.write("<br>Elemento de arreglo "+i+" es "+arreglo1[i]);
}
var arreglo2 = [89,PI,fecha,"womp womp", true];
for (j in arreglo2) {
    document.write("<br>Elemento de arreglo "+j+" es "+arreglo2[j]);
}
window.alert(arreglo1+"\n"+arreglo2);
var arreglo3 = arreglo1.concat(arreglo2);
for (i in arreglo3) {
    document.write("<br>Elemento de arreglo "+i+" es "+arreglo3[i]);
}
var cosas = ["tabletas", "telefonos", "computadoras"];
document.getElementById("wompo").innerHTML = "Numero de cosas es " + cosas.length;
texto = "<ul>";

function miLista(value) {
    texto += "<li>" + value +"</li>"
}

cosas.push("Audifonos");
for (i in cosas) {
    miLista(cosas[i]);
}

document.writeln(texto)