//Funciones
function saludar(nombre) {
    return `Hola ${nombre}`;
}
const saludo = saludar("Leonardo")
console.log(saludo);

//Funciones tipo flecha y anonimas
const array = [1, 2, 3, 4, 5, 7]

const dobleValor = valor => valor * 2
const arrayFlecha = dobleValor(3)
console.log(arrayFlecha);

const arrayAnonima = array.map(valor => valor * 2)
console.log(arrayAnonima);

const arrayCombinada = array.map(dobleValor)
console.log(arrayCombinada);

//Carga de funciones
function saludar(){
    return hola()
}

function hola(){
    return "Hola Mundo"
}

const saludando = saludar()
console.log(saludando);

//Sobrecarga de funciones
function recursivo(){
    recursivo()
}

//Funciones asincronas
function miAsincrona(){
    //Hacer una llamada a una base de datos externa. Que pueden ejecutarse o no de forma correcta.

}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado correctamente"))
    .catch(() => console.log("Error de ejecución"))
    .finally(() => console.log("Yo me ejecuto siempre"))

//Funciones generadoras
function* generaId() {
    let id = 0
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id
    }
}

const gen = generaId();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())