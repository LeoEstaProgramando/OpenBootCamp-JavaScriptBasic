//Una cadena de texto con tu Nombre
var nombre = "Leonardo";
console.log(nombre);
console.log(typeof(nombre));

//Otra cadena de texto con tu Apellido
var apellido = "Ventura";
console.log(apellido);
console.log(typeof(apellido));

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
var estudiante = `${nombre} ${apellido}`;
console.log(estudiante);
console.log(typeof(estudiante));

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
var estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
console.log(typeof(estudianteMayus));

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
var estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
console.log(typeof(estudianteMinus));

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
var numero_letras = estudiante.length;
console.log(numero_letras);
console.log(typeof(numero_letras));

//Una variable que contenga la primera letra del Nombre
var first_letter_nombre = nombre.slice(0,1);
console.log(first_letter_nombre);
console.log(typeof(first_letter_nombre));

//Otra variable que contenga la última letra del Apellido
var last_letter_apellido = apellido.slice(apellido.length-1,apellido.length)
console.log(last_letter_apellido);
console.log(typeof(last_letter_apellido));

//Una cadena de texto que elimine los espacios de la variable "estudiante"
var cortar_espacio = estudiante.replace(" ","");
console.log(cortar_espacio);
console.log(typeof(cortar_espacio));

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
var contiene_nombre = estudiante.includes(nombre)
console.log(contiene_nombre);
console.log(typeof(contiene_nombre));
