function bienvenida (){
    document.writeln("<h2>Hola entusiasta de <i>JavaScript</i>. Bienvenido a la Programación Web</h2>");
    document.writeln("<h4>Este mensaje se generó desde una función</h4>");
}

function sumar (a, b){
    return a + b;
}

function varLocales (a, b){
    a = 35;
    b = 60;

    document.writeln("<br><br>El valor de la variable a = " + a + " dentro de la función.");
    document.writeln("<br><br>El valor de la variable b = " + b + " dentro de la función.");
}

function aCentigradosDeFahrenheit (f){
    return ((5 / 9) * (f - 32));
}