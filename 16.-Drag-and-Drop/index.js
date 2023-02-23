const parrafos = document.querySelectorAll("p");
const secciones = document.querySelectorAll("section");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        //console.log("Estoy arrastrando el parrafo: " + parrafo.innerText);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
        const fantasma = document.querySelector("#fantasma");
        event.dataTransfer.setDragImage(fantasma, 0, 0);
    })

    parrafo.addEventListener("dragend", event => {
        //console.log("Estoy soltando el parrafo: " + parrafo.innerText);
        parrafo.classList.remove("dragging");
    })
})

secciones.forEach(seccion => {
    console.log(seccion.className);

    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        //console.log("DragOver");
        event.dataTransfer.dropEffect = "copy";
    })
    
    seccion.addEventListener("drop", event => {
        //console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
        if (seccion.className == "section-3") {
            seccion.removeChild(parrafo);
        }
    })
})
