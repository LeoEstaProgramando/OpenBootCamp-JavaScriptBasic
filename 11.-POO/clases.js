class Persona {
    //nombre;
    //edad;
    //isDeveloper;
    //el constructor tiene 3 atributos de la clase Persona
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    //metodo saludo
    saludo() {
        console.log('Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.');
    }
}

//Instanciando una clase, es sinónimo de inicinializar
const persona1 = new Persona('Leonardo', 24, true);
console.log(persona1);
persona1.saludo();

const persona2 = new Persona('Maria', 17, false);
console.log(persona2);
persona2.saludo();

//instanceof -> similar al typeof, pero para clases
console.log(typeof persona2);
console.log(persona2 instanceof Persona);