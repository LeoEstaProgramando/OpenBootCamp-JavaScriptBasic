const formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", evento => {
    console.log(evento);
    evento.preventDefault();
})

const enviar = document.querySelector(".btn-enviar");
enviar.addEventListener("click", () => {
    //alert("Se ha hecho click");
    confirm("¿Estás de acuerdo?") ? console.log("OK") : console.log("NOPE");
})

const info = document.querySelector(".btn-info");
info.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu apellido?");
    if (nombre) {
        console.log(`Tu apellido es ${nombre}`);
    } else {
        console.log("No has introducido nada en el campo");
    }
})

const titulo = document.getElementById("titulo");
console.log(titulo);

titulo.addEventListener("cambiarTexto", e => {
    console.log(e.detail);
    titulo.innerText = e.detail.texto;
    titulo.style.color = e.detail.color;
})

function cambiarTexto(texto, color) {
    const e = new CustomEvent("cambiarTexto", {
        detail: {
            texto,
            color,
        }
    })
    titulo.dispatchEvent(e);
}

//$(selector).accion();
//$("li").hide();
//$(document).ready();

$(() => {

    $(".btn-ocultar").click(() => {
        //$("h1").hide();
        $("h1").fadeOut();
    })

    $(".btn-mostrar").click(() => {
        //$("h1").show();
        $("h1").fadeIn();
    })

    $("#el-1").dblclick(() => {
        $("h1").css({ color: "red" });
    })

    $("#el-2").dblclick(() => {
        $("h1").css({ color: "blue" });
    })

    $("#el-3").dblclick(() => {
        $("h1").css({ color: "yellow" });
    })

    $(".btn-agregar").click(() => {
        $("ul").append("<li>Nuevo Elemento</li>");
        //$("ul").prepend("<li>Nuevo Elemento</li>");
    })

    $("li").mouseenter((elemento) => {
        elemento.target.style.color = "red";
    })

    $("li").mouseleave((elemento) => {
        elemento.target.style.color = "black";
    })
})

const lista = [{
    nombre: "Gorka",
    edad: 24,
}, {
    nombre: "Leonardo",
    edad: 25,
}, {
    nombre: "Ruben",
    edad: 17,
}]

console.log(lista);
console.table(lista);