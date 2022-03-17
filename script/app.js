import Perro from "./perro.js";

let perro = new Perro('jimbmo', 2, 'salchicha', 'marron');

let ladrar = perro.ladrar();
let ruido = perro.speak();

console.log(ladrar);
console.log(ruido);