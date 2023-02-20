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

class Desarrollador extends Persona {
    #lenguaje;
    constructor(nombre, edad, isDeveloper, lenguaje) {
        super(nombre, edad, isDeveloper);
        this.#lenguaje = lenguaje;
    }

    //Override
    saludo() {
        super.saludo();
        console.log('Y soy desarrollador de ' + this.#lenguaje);
    }
}

const nuevoDev = new Desarrollador('Lucho', 24, true, 'JavaScript');
nuevoDev.saludo();

console.log(nuevoDev);
console.log(nuevoDev.getNombre());
