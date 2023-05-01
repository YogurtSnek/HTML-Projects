const PI = 3.14159; //constante

var f = new Date(); //objeto
var fecha = f.toDateString();
document.writeln(f);
document.writeln("<br>" + fecha);

var arreglo1 = [54, 63, 23, 645, 4]; //agregar valores directamente
arreglo1[4] = 99; //cambiar valor
document.writeln("<br><br><b>arreglo1</b>");
for (i in arreglo1) {
    document.writeln("<br>Elemento de arreglo1 en posición " + i + " es " + arreglo1[i]);   
}
document.writeln("<br>" + arreglo1);
//window.alert(arreglo1);

var arreglo2 = [89, PI, fecha, "Comentario fuera de lugar", true, f, 'w', 43.755];
document.writeln("<br><br><b>arreglo2</b>");
for (j in arreglo2) {
    document.writeln("<br>Valor en el arreglo2 " + arreglo2[j]);
}
//window.alert(arreglo1 + "\n" + arreglo2);

var arreglo3 = arreglo1.concat(arreglo2);
document.writeln("<br><br><b>arreglo3</b>");
document.writeln("<br>" + arreglo3);

var cosas = ["Tabletas", "Teléfonos", "Televisiones", "Computadoras Portátiles", "Proyectores"];
document.getElementById("aquí").innerHTML = "Número de elementos en cosas es: " + (cosas.length);
document.writeln("<br><br>" + cosas);

texto = "<ul>";

function miLista(value){
    texto += "<li>" + value + "</li>";
}

cosas.push("Audifonos");

for (i = 0; i < cosas.length; i++){
    miLista(cosas[i]);
}

texto += "</u>";

document.getElementById("ahi").innerHTML = document.writeln(texto);