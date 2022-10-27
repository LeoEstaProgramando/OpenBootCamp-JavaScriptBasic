//Una función sin parámetros que devuelva siempre "true"
function alwaysTrue() {
    return true
}
console.log(alwaysTrue());

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function holaPromesa() {
    
    const miPromesa = new Promise((resolve, reject) => {
        const hola = "Hola soy una promesa"
        if (typeof hola === "string") {
            resolve()
            setTimeout(console.log(hola), 5000)
        } else {
            reject()
        }
    })

    miPromesa
        .then(() => console.log("Ejecutado correctamente"))
        .catch(() => console.log("Error de ejecución"))
        .finally(() => console.log("Siempre estoy aquí"))
}

holaPromesa()

//Una función generadora de índices pares automáticos
function* generarIndices() {
    let id = 0
    while (true) {
        id += 2
        if (id === 10) {
            return id
        }
        yield id
    }
}

const gen = generarIndices()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())