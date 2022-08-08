var texto = "Hola Mundo";
console.log(texto.length);

var tajada = texto.slice(5,11);
console.log(tajada)

var tajada2 = texto.substring(5,11);
console.log(tajada2)

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.toUpperCase == texto.toLowerCase);

var cadena1 = "Hola";
var cadena2 = "Mundo";

console.log(cadena1.concat(" ", cadena2));
console.log(cadena1 + " " + cadena2);
console.log(`${cadena1} ${cadena2}`);

var cadenamala = "   Hola Mundo    "
console.log(cadenamala.length);
console.log(cadenamala.trim().length); //elimina todos los espacios
console.log(cadenamala.trimStart().length); //elimina los espacios del inicio
console.log(cadenamala.trimEnd().length); //elimina los espacios del final

var text = "Hola Mundo Mundo";
console.log(text.charAt(9));
console.log(text.indexOf("Mundo")); //indica la posicion del primer string
console.log(text.lastIndexOf("Mundo")); //indica la posicion del ultimo string

console.log(text.match(/Mundo/g));
console.log(text.includes("Mundo"));
console.log(text.includes("Hala"));

console.log(text.startsWith("Hola"));
console.log(text.startsWith("Hala"));

console.log(text.endsWith("Hola"));
console.log(text.endsWith("Mundo"));