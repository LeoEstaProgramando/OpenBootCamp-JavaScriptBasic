//Creando objetos como un Novato
const persona = {
    nombre: 'Leonardo',
    apellido: 'Ventura',
    edad: 25,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola');
    }
}

persona.saludo();

const otraPersona = {
    nombre: 'David',
    apellido: 'Puentes',
    edad: 22,
    isDeveloper: false,
    saludo: function() {
        console.log('Bye');
    }
}

otraPersona.saludo();

//Una solución para facilitar las creaciones de objetos, es la siguiente:
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, //nombre: nombre,
        edad, //edad: edad,
        isDeveloper, //isDeveloper: isDeveloper,
        saludo: function() {
            console.log('Hola');
        }
    }
}

const persona1 = creaPersona('José', 22, true);
console.log(persona1);

const persona2 = creaPersona('María', 17, false);
console.log(persona2);