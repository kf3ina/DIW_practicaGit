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
}

/*Cambiar el ancho del nav a 250px*/
function abrirNav() {
    document.getElementsByTagName("aside")[0].style.width = "250px";
    document.getElementById("flechaAside").style.width = "0";
  }
  
  /*Cambiar el ancho del nav a  0 */
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