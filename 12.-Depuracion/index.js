const persona = {
    nombre: 'Leonardo',
    edad: 24
}

console.log(persona);

function obtenDobleEdad(edad) {
    return 2 * edad;
}

const dobleEdad = obtenDobleEdad(persona.edad);
console.log(dobleEdad);

function obtenArray(edad) {

    let arrayNum = [];

    for (let i = 0; i < 10; i++) {
        const num = edad + i;
        console.log(num);
        arrayNum.push(num);
    }

    return arrayNum;
}

const array = obtenArray(persona.edad);
console.log(array);