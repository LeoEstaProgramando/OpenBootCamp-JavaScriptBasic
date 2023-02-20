class Estudiante {
    nombre;
    asignaturas = ['JavaScript', 'HTML', 'CSS'];

    constructor(nombre) {
        this.nombre = nombre;
    }
    
    getDatos() {
        return 'El estudiante ' + this.nombre + ' está cursando: ' + this.asignaturas[0] + ', ' + this.asignaturas[1] + ' y ' + this.asignaturas[2] + '.';
    }
}

const estudiante1 = new Estudiante('Leo');
console.log(estudiante1.getDatos());