/* SETS */
//La diferencia entre arrays y sets, es que los sets no permiten elementos duplicados.
const array = [1, 2, 3, 4, 5, 5, 6, 8, 1, 2]
const miSet = new Set(array)
console.log(array);
console.log(miSet);

miSet.add(9) //Añade elemento
miSet.delete(2) //Elimina elemento
miSet.has(4) //Devuelve true o false si existe ese elemento
miSet.size //Devuelve el numero de elemento
miSet.forEach( elemento => {console.log(elemento)}) //Recorre cada elemento del set
const it_miSet = miSet.values() //Itera cada valor del set
const ar_miSet = [...miSet] //transforma el set a array

/* OBJETOS */
//Los objetos son muy usados actualmente en JavaScript
const obj = {
    id: 4,
    nombre: "Leonardo",
    apellido: "Ventura",
    isDeveloper: false,
    librosFavoritos: ["Rencor", "Osadia"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id); //Acceso a la propiedad id
console.log(obj["4-juegos"]); //Acceso a la propiedad 4-juegos

const propiedad = "isDeveloper"; //Transformando la propiedad a string
console.log(obj[propiedad]); //Otra forma de acceso mediante corchetes

const obj2 = obj; //Se copia el objeto, pero con la misma dirección del valor de referencia, cualquier cambio que se haga se ve afectada al origen obj
obj2.nombre = "Iñigo";
console.log(obj2.nombre);
console.log(obj.nombre);

const obj3 = {...obj} //Se copia el objeto, pero sin la misma dirección del valor de referencia, cualquier cambio que se haga no se ve afectada al origen obj
obj3.nombre = "Leonardo"
console.log(obj3.nombre);
console.log(obj.nombre);

