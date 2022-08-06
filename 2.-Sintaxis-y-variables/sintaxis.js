//Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
//- Tu nombre (string)
//- Tu edad (number)
//- ¿Eres desarrollador? (boolean)
//- Tu fecha de nacimiento (Date)
//- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

//1. Declarandolo en variables y contantes.
var nombre = 'Leonardo';
var edad = 24;
var desarrollador = false;
var fecha_nacimiento = new Date(1997,10,17)
const libro = {
    titulo: 'La ciudad y los perros',
    autor: 'Mario Vargas Llosa',
    fecha: new Date(1963),
    url: 'https://es.wikipedia.org/wiki/La_ciudad_y_los_perros',
}

//2. Imprimiendo para validar las variables y constantes.
console.log(nombre)
console.log(edad)
console.log(desarrollador)
console.log(fecha_nacimiento)
console.log(libro)

//3. Almacenandolo en una lista.
const lista = [nombre, edad, desarrollador, fecha_nacimiento, libro]
console.log(lista)