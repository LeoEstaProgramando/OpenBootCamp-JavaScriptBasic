//La fecha de hoy
const hoy = new Date();
console.log(hoy);

//La fecha de tu nacimiento
const fechaNac = new Date(1997, 10, 17);
console.log(fechaNac);

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const mayor = hoy > fechaNac;
console.log(mayor);

//Una variable que contenga el día de tu nacimiento
const dia = fechaNac.getDate();
console.log(dia);

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = fechaNac.getMonth() + 1;
console.log(mes);

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anio = fechaNac.getFullYear();
console.log(anio);