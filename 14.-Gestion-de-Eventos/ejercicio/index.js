const aceptar = document.querySelector(".btn-aceptar");

aceptar.addEventListener("click", () => {
    alert("click en el botón");
})

$(() => {
    $(".btn-aceptar").click(() => {
        console.log("Hola, estoy utilizando jQuery");
    })
})