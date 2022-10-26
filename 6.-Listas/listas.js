var array = [4, "name", false]; //Lista

array.push(3, "final"); //Agregar elementos al final de la lista
console.log(array);

array.unshift(1, "inicio"); //Agregar elementos al inicio de la lista
console.log(array);

array.pop(); //Quitar el último elemento de la lista
console.log(array);

array.shift(); //Quitar el primer elemento de la lista
console.log(array);

array.splice(1, 2); //Quita el elemento segun index de inicio, y cantidad de elementos a quitar
console.log(array);

array.splice(1, 0, "hola", "mundo"); //Agrega elementos, cuando se especifica que la cantidad de elementos a deletear es "0"
console.log(array);

array.splice(0, 1, "the"); //Reemplaza elementos cuando se especifica que la cantidad de elementos a deletear es "1", y agregas solo 1
console.log(array);

var array2 = ["el", "world"];
console.log(array.concat(array2));
console.log(array);
console.log(array2);

var array3 = array.concat(array2);
console.log(array3);

console.log(...array3);

var array4 = [...array, ...array2];
console.log(array4);

var array5 = array.slice(3, 5);
console.log(array5);

var array6 = array.slice(3, -1);
console.log(array6);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let palabra = "";
array.forEach(element => {
    palabra = palabra + element + " ";
    console.log(element);
});
console.log(palabra);

const listObjetos = [
    {nombre: "Pablo", edad:35},
    {nombre: "Pedro", edad:23},
    {nombre: "Juan", edad:19},
    {nombre: "Percy", edad:12},
]

const objeto = listObjetos.find(o => {
    if (o.nombre === "Pablo"){
        return true;
    }
})
console.log(objeto.edad);

const objeto1 = listObjetos.find(y => y.nombre === "Pablo");
console.log(objeto.edad);

const {edad} = listObjetos.find(y => y.nombre === "Juan");
console.log(edad);

const ciudades = ["Lima", "Arequipa", "Puno", "Ayacucho"];

const valor = ciudades.forEach(v => {
    console.log(v);
    return 4;
})
console.log(valor);

const orden = ciudades.map((valor, indice) => `${indice + 1}. ${valor}`);
console.log(orden);

const mayorEdad = listObjetos.filter(obj => {
    if (obj.edad >= 18) {
        return true;
    } else {
        return false;
    }
})
console.log(mayorEdad);

const mayorEdad1 = listObjetos.filter(obj => obj.edad >= 18);
console.log(mayorEdad1);

const noPedro = listObjetos.filter(obj => obj.nombre !== "Pedro");
console.log(noPedro);

const valores = [4, 9, 13, 35, 24];
const suma = valores.reduce((acumulado, current, indice, arrayOriginal) => {
    console.log(acumulado);
    console.log(current);
    console.log(indice);
    console.log(arrayOriginal);
    return acumulado + current;
})
console.log(suma);

//Ordenar arrays númericos
const numeros = [2, 5, 9, 14, 15, 1, 2, 0, 4];
numeros.sort((a, b) => b - a)
console.log(numeros);

//Ordenar arrays objetos
const estudiantes = [{nombre: "Pablo", edad:35}, {nombre: "Pedro", edad:23}, {nombre: "Juan", edad:19}, {nombre: "Percy", edad:12}];
estudiantes.sort((a, b) => a.edad - b.edad);
console.log(estudiantes);

//Comparar elementos del array (every)
const numbers = [2, 5, 9, 14, 15, 1, 2, 0, 4];
const resultado = numbers.every(valor => valor > 0);
console.log(resultado);

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]
const ar3 = [1, 2, 3, 6]
const compararArray = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}
console.log(compararArray(ar1, ar2));
console.log(compararArray(ar1, ar3));

//Comparar elementos del array (some)
const numbersSome = [2, 5, 9, 14, 15, 1, 2, 0, 4];
const resultadoSome = numbersSome.some(valor => valor < 0);
console.log(resultadoSome);