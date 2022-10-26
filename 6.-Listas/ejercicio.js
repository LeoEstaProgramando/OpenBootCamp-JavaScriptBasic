//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompras = ['Manzana', 'Carne de res', 'Fideos', 'Pescado', 'Agua destilada'];

//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push('Aceite de Girasol');
console.log(listaCompras);

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop();
console.log(listaCompras);

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPelis = [
    {titulo : "Guardianes de la Galaxia", director : "James Gunn", fecha : new Date(2015, 10, 17)},
    {titulo : "Iron Man", director : "Robert Downey", fecha : new Date(2009, 07, 15)},
    {titulo : "Eternals", director : "Nick Fury", fecha : new Date(2022, 01, 20)}
]

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const PelisAntiguas = listaPelis.filter(valor => valor.fecha > new Date(2010, 01, 01));
console.log(PelisAntiguas);

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const PelisDirectores = listaPelis.map(valor => valor.director)
console.log(PelisDirectores);

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const PelisTitulos = listaPelis.map(valor => valor.titulo)
console.log(PelisTitulos);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const PelisConcat = PelisDirectores.concat(PelisTitulos)
console.log(PelisConcat);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const PelisSpread = [...PelisDirectores, ...PelisTitulos]
console.log(PelisSpread)