var imagenes = ['Imagenes/1.webp', 'Imagenes/2.webp', 'Imagenes/3.webp', 
'Imagenes/4.webp', 'Imagenes/5.webp', 'Imagenes/6.webp']
var i = 0

function sigue() {
    var desp = document.getElementById("desplazar")
    i++
    if (i >= imagenes.length) {
        i = 0
    }
    desp.src=imagenes[i]
}

function antes() {
    var desp = document.getElementById("desplazar")
    i--
    if (i < 0) {
        i = imagenes.length - 1
    }
    desp.src=imagenes[i]
}

