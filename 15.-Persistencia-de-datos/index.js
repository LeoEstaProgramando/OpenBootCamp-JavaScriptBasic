//JSON.stringfy -> Convierte un objeto/array en un string
//JSON.parse    -> Convierte un objeto/array convertido a través de JSON.stringfy en un objeto de JavaScript

/* LOCAL STORAGE Y SESSION STORAGE*/
localStorage.setItem("nombre", "Gorka");
localStorage.setItem("nombre", "Leonardo");
console.log(localStorage.getItem("nombre"));

localStorage.setItem("persona", JSON.stringify({ nombre: "Daniel", edad: 24}));
console.log(JSON.parse(localStorage.getItem("persona")));

localStorage.removeItem("nombre");

sessionStorage.setItem("nombre", "leonardo");
sessionStorage.removeItem("nombre");

/* COOKIES */
document.cookie = "nombreCookie = LeoCookie";
document.cookie = "apellidoCookie = VenturaCookie; expires=" + new Date(2023, 4, 15).toUTCString();
console.log(document.cookie);