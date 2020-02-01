var cero = 0;
$(document).ready(burgerMenu);

/*eventos click*/
window.addEventListener("load", cargarEventos);
function cargarEventos() {
    var botonCerrarAside = document.getElementById("btnCerrar");
    botonCerrarAside.addEventListener("click", cerrarNav);
    var botonAbrirAside = document.getElementById("flechaAside");
    botonAbrirAside.addEventListener("click", abrirNav);
    botonAbrirAside.addEventListener("mouseenter", animarFlechaAgrandar);
    botonAbrirAside.addEventListener("mouseleave", animarFlechaEncoger);
    document.getElementById("btnJuego").addEventListener("click", cargarAnimacion)

    cargarReproductorVideo();
    cargarBotonesAudio();
    cargarCanvas();
}

function abrirNav() {
    document.getElementsByTagName("aside")[0].style.width = "250px";
    document.getElementById("flechaAside").style.width = "0";
}

function cerrarNav() {
    document.getElementsByTagName("aside")[0].style.width = "0";
    document.getElementById("flechaAside").style.width = "30px";
}

function animarFlechaAgrandar() {
    document.getElementById("flechaAside").style.width = "40px";
}

function animarFlechaEncoger() {
    document.getElementById("flechaAside").style.width = "30px";
}

function burgerMenu() {
    $(window).on('scroll', function () {
        /*script para mostrar/ocultar icono del burger menu*/
        $('header').toggleClass('ocultar', $(window).scrollTop() > cero);
        $('#flechaAside').toggleClass('ocultar', $(window).scrollTop() > cero);
        cero = $(window).scrollTop();
    });

    $('.burgerMenu').click(function () {
        /*script para mostrar/ocultar el menú de navegación del burger menu*/
        $('nav').toggleClass('mostrar');
    });
}

/*Funcionalidad para los botones del ejercicio 5.1*/

function cargarReproductorVideo() {
    reproductor = document.getElementById("videoTema6");
    reiniciar = document.getElementById("botonReiniciar");
    atras = document.getElementById("botonAtras");
    reproducir = document.getElementById("botonPlay");
    adelante = document.getElementById("botonAdelante");
    silenciar = document.getElementById("botonSilenciar");
    bajarVolumen = document.getElementById("botonBajarVolumen");
    subirVolumen = document.getElementById("botonSubirVolumen");

    reiniciar.addEventListener('click', function () {
        reproductor.currentTime = 0;
        reproductor.play();
        reproducir.innerHTML = "<span class='fa fa-play'></span>";
    });

    atras.addEventListener('click', function () {
        if (reproductor.currentTime >= 5) {
            reproductor.currentTime -= 5;
        }
    });

    reproducir.addEventListener('click', function () {
        if (reproductor.paused || reproductor.ended) {
            reproductor.play();
            reproducir.innerHTML = "<span class='fa fa-pause'></span>";
        } else {
            reproductor.pause();
            reproducir.innerHTML = "<span class='fa fa-play'></span>";
        }
    });

    adelante.addEventListener('click', function () {
        if (reproductor.currentTime <= (reproductor.duration - 5)) {
            reproductor.currentTime += 5;
        }
    });

    silenciar.addEventListener('click', function () {
        if (reproductor.muted) {
            reproductor.muted = false;
            bajarVolumen.disabled = false;
            silenciar.innerHTML = "<span class='fa fa-volume-mute'></span>";
        } else {
            reproductor.muted = true;
            bajarVolumen.disabled = true;
            silenciar.innerHTML = "<span class='fa fa-volume-off'></span>";
        }
    });

    bajarVolumen.addEventListener('click', function () {
        if (reproductor.volume > 0.1) {
            reproductor.volume -= 0.1;
            subirVolumen.disabled = false;
        } else {
            bajarVolumen.disabled = true;
        }
    });

    subirVolumen.addEventListener('click', function () {
        if (reproductor.volume < 0.9) {
            reproductor.volume += 0.1;
            bajarVolumen.disabled = false;
        } else {
            subirVolumen.disabled = true;
        }
    });
}

function cargarBotonesAudio() {
    let botones = document.querySelectorAll('.botonesSonidosAnimales input[type=button]');
    botones[0].addEventListener('click', function () {
        let archivoAudio = new Audio();
        archivoAudio.src = "../images/elephant.wav";
        archivoAudio.play();
    });
    botones[1].addEventListener('click', function () {
        let archivoAudio = new Audio();
        archivoAudio.src = "../images/duck.mp3";
        archivoAudio.play();
    });
    botones[2].addEventListener('click', function () {
        let archivoAudio = new Audio();
        archivoAudio.src = "../images/dog.mp3";
        archivoAudio.play();
    });
    botones[3].addEventListener('click', function () {
        let archivoAudio = new Audio();
        archivoAudio.src = "../images/rooster.mp3";
        archivoAudio.play();
    });
}


// Script para UD6 Ejercicio 7.1
function cargarCanvas() {
    let dibujo = document.getElementsByTagName('canvas')[0];
    let contexto = dibujo.getContext("2d");
    // contexto.fillStyle = "rgb(0,0,0)";
    // contexto.fillRect(200, 50, 400, 300);
    // contexto.lineWidth = 2;
    // contexto.strokeStyle = "white";
    let gradiente = contexto.createRadialGradient(400, 200, 50, 400, 200, 400);
    gradiente.addColorStop(0, "#F20F79");
    gradiente.addColorStop(0.65, "#04ADBF");
    gradiente.addColorStop(1, "white");
    contexto.fillStyle = gradiente;
    contexto.fillRect(0, 0, 800, 400);

    let imagen = new Image();
    imagen.src = "../images/logo.svg";
    imagen.onload = function () {
        contexto.drawImage(imagen, 204, 4, 390, 390);
    }

    contexto.lineWidth = 2;
    contexto.strokeStyle = "black";
    contexto.strokeRect(2, 2, 796, 396);

    contexto.beginPath();
    contexto.moveTo(4, 4);
    contexto.lineTo(796, 396);
    contexto.lineWidth = 4;
    contexto.strokeStyle = "white";
    contexto.stroke();

    contexto.beginPath();
    contexto.arc(400, 200, 196, 0, 2 * Math.PI);
    contexto.lineWidth = 4;
    contexto.strokeStyle = "#F20F79";
    contexto.stroke();

    contexto.font = "Bold 30px League Spartan";
    contexto.textBaseline = "Top";
    contexto.fillStyle = "#F2913D"
    contexto.fillText("Mi primer Canvas", 5, 32);
}

//Script para UD6 Ejercicio 8.1
debugger;
var lienzo = null, canvas = null;
var x = 50, y = 50;
var lastPress = null; //Variable para guardar la tecla presionada

//En nuestro juego, usaremos las teclas izquierda, arriba, derecha y abajo, cuyos valores numéricos son 37, 38, 39 y 40 respectivamente.
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_PAUSE = 80;

function cargarAnimacion() {
    debugger;
    canvas = document.getElementById('lienzo');
    lienzo = canvas.getContext('2d'); //obtenemos el contexto de dibujo
    document.getElementById("btnJuego").style.display = "none";
    lastPress = null;
    run();
}
function run() {
    //requestAnimationFrame(): informa al navegador de que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación.
    requestAnimationFrame(run); //animación optimizada
    accionesJuego();
    pintarLienzo(lienzo);
}
function accionesJuego() {
    //Modificamos la dirección que tendrá nuestro player en función de la tecla presionada   
    if (lastPress == KEY_RIGHT)
        x += 5;
    if (lastPress == KEY_DOWN)
        y += 5;
    if (lastPress == KEY_LEFT)
        x -= 5;
    if (lastPress == KEY_UP)
        y -= 5;
    if (lastPress == KEY_PAUSE) {
        document.getElementById("btnJuego").style.display = "inline";
        document.getElementById("btnJuego").innerHTML = "Reanudar"
    }

    //verificaremos si el player ha salido del canvas, en cuyo caso, haremos que aparezca por el otro lado:
    if (x >= canvas.width)
        x = 0;
    if (x < 0)
        x = canvas.width;
    if (y >= canvas.height)
        y = 0;
    if (y < 0)
        y = canvas.height;
}
function pintarLienzo(lienzo) {
    lienzo.fillStyle = "#F7F9FA"; //le ponemos un color al lienzo
    lienzo.fillRect(0, 0, canvas.width, canvas.height); //Dibujamos el lienzo
    lienzo.fillStyle = '#F20F79';
    lienzo.fillRect(x, y, 10, 10); //Dibujamos el jugador: va por posición x,y y es de 10x10       
}

document.addEventListener('keydown', function (evt) {
    //Creamos un manejador de evento para el teclado que se encargue de almacenar la tecla presionada. El evento que nos interesa en este caso es keydown
    lastPress = evt.keyCode;
}, false);
