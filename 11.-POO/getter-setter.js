class Persona {
    //Privated -> #
    //Solo se puede acceder desde dentro de la clase
    #nombre;
    #edad;
    //Protected -> _
    //Solo se puede acceder desde dentro de la clase y clases hereditarias
    _isDeveloper;

    constructor(nombre, edad, isDeveloper) {
        this.#nombre = nombre;
        this.#edad = edad;
        this._isDeveloper = isDeveloper;
    }

    saludo() {
        console.log('Hola, mi nombre es ' + this.#nombre + ' y tengo ' + this.#edad + ' años.');
    }

    //Funciones Getter
    getNombre() {
        return this.#nombre;
    }

    getEdad() {
        return this.#edad;
    }

    isDeveloper() {
        return this._isDeveloper;
    }

    //Funciones Setter
    setNombre(nuevoNombre) {
        return this.#nombre = nuevoNombre;
    }

    setEdad(nuevaEdad) {
        return this.#edad = nuevaEdad;
    }
    
}

const persona1 = new Persona('Leonardo', 25, true);
console.log(persona1);
console.log(persona1.nombre);

persona1.saludo();
console.log(persona1.getNombre());
console.log(persona1.getEdad());
console.log(persona1.isDeveloper());

//Getter -> Métodos que nos permite obtener atributos/métodos privados o protegidos.
//Setter -> Métodos que nos permite modificar atributos privados o protegidos.
persona1.setNombre('Pedro');
console.log(persona1.getNombre());
persona1.setEdad(36);
console.log(persona1.getEdad());
