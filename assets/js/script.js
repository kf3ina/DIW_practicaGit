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

    cargarReproductorVideo();
    cargarBotonesAudio();

    // Script para UD6 Ejercicio 7.1

    var dibujo = document.getElementsByTagName('canvas')[0];
    var contexto = dibujo.getContext("2d");
    // contexto.fillStyle = "rgb()";
    contexto.fillRect(200, 50, 400, 300);
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

function cargarReproductorVideo (){
    reproductor = document.getElementById("videoTema6");
    reiniciar = document.getElementById("botonReiniciar");
    atras = document.getElementById("botonAtras");
    reproducir = document.getElementById("botonPlay");
    adelante = document.getElementById("botonAdelante");
    silenciar = document.getElementById("botonSilenciar");
    bajarVolumen = document.getElementById("botonBajarVolumen");
    subirVolumen = document.getElementById("botonSubirVolumen");
    
    reiniciar.addEventListener('click', function(){
        reproductor.currentTime = 0;
        reproductor.play();
        reproducir.innerHTML = "<span class='fa fa-play'></span>";
    });

    atras.addEventListener('click', function(){
        if (reproductor.currentTime >= 5) {
            reproductor.currentTime -= 5;
        }
    });

    reproducir.addEventListener('click', function(){
        if (reproductor.paused || reproductor.ended){
            reproductor.play();
            reproducir.innerHTML = "<span class='fa fa-pause'></span>";
        } else{
            reproductor.pause();
            reproducir.innerHTML = "<span class='fa fa-play'></span>";
        }
    });

    adelante.addEventListener('click', function(){
        if (reproductor.currentTime <= (reproductor.duration - 5)) {
            reproductor.currentTime += 5;
        }
    });

    silenciar.addEventListener('click', function(){
        if (reproductor.muted){
            reproductor.muted = false;
            bajarVolumen.disabled = false;
            silenciar.innerHTML = "<span class='fa fa-volume-mute'></span>";
        } else {
            reproductor.muted = true;
            bajarVolumen.disabled = true;
            silenciar.innerHTML = "<span class='fa fa-volume-off'></span>";
        }
    });

    bajarVolumen.addEventListener('click', function(){
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

function cargarBotonesAudio () {
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



