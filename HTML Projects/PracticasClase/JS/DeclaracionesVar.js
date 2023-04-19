//tipos de variables
let a;
a = 5;
var b;
b = 20;
var c;
c = b + a;
document.writeln("La declaracion de la variable utilizando let <br>");
document.writeln("<i>let a;</i><br>");
document.writeln("<i>a = " + a + ";</i><br>");
document.writeln("La cual es tipo: " + typeof(a) + "<br><hr>");
document.writeln("La declaracion de la variable utilizando var <br>");
document.writeln("<i>var b;</i><br>");
document.writeln("<i>b = " + b + ";</i><br>");
document.writeln("La cual es tipo: " + typeof(b) + "<br><hr>");
document.writeln("La declaracion de la variable utilizando var <br>");
document.writeln("<i>c = b + a</i><br>");
document.writeln("<i>c = " + c + ";</i><br><hr>");
document.writeln("a - b = " + (a-b))