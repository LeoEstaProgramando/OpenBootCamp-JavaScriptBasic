//Una variable que contenga tu altura en centímetros (entero)
let altura_centimetros = 167;

//Una variable que contenga tu altura en metros (número de coma flotante)
let altura_metros = 1.67;

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 59.95;

//Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_metros_top = Math.ceil(altura_metros);
console.log(altura_metros_top);

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_kg_floor = Math.floor(peso_kg);
console.log(peso_kg_floor);

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let verify_max_value_JS = Number.MAX_VALUE == Number.MAX_VALUE + 1;
console.log(verify_max_value_JS);
