//Un nuevo Set con los nombres de tu familia
const miFamilia = new Set(["Roman", "Alicia", "Carlos", "Antonio", "Leonardo", "Javier", "Noelia"]);
//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miFamilia.add("Leonardo");
//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida)
miFamilia.add("JavaScript");

console.log(miFamilia);