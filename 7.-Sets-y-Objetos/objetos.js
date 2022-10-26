//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: "Leonardo",
    apellido: "Ventura",
    edad: 24,
    altura: 1.69,
    esDesarrollador: true
}

//Una variable que obtenga tu edad a partir del objeto anterior
const edad = datos.edad;

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [datos, {nombre: "Gerson", apellido: "Pariona", edad: 23, altura: 1.68, esDesarrollador: false}, {nombre: "Derry", apellido: "Merino", edad: 25, altura: 1.74, esDesarrollador: false}]

//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenada = lista.sort((a, b) => a.edad - b.edad)