
function abrirNav() {
    document.getElementsByTagName("aside")[0].style.width = "250px";
    document.getElementById("flechaAside").style.width = "0";
  }
  
function cerrarNav() {
    debugger;
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
    })

    $('.burgerMenu').click(function () {
        /*script para mostrar/ocultar el menú de navegación del burger menu*/
        $('nav').toggleClass('mostrar');
    })
}

/*Funcionalidad para los botones del ejercicio 5.1*/

function cargarReproductorVideo (){
    debugger;
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
        reproducir.value = "\u23F8";
    });

    atras.addEventListener('click', function(){
        if (reproductor.currentTime >= 5) {
            reproductor.currentTime -= 5;
        }
    });

    reproducir.addEventListener('click', function(){
        if (reproductor.paused || reproductor.ended){
            reproductor.play();
            reproducir.value = "\u23F8";
        } else{
            reproductor.pause();
            reproducir.value = "\u25BA";
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
            silenciar.value = "\u0xF0";
        } else {
            reproductor.muted = true;
            silenciar.value = "\u1F507"
        }
    });
}