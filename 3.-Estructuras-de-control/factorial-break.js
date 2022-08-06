//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

var factorial = 10;
var resultado = 1;
let i = 1;

while (i <= factorial){
    if (i == factorial) {
        break;
    } else {
        resultado = resultado * i;
        i++;
    }
}

console.log(resultado)