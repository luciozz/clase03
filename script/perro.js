import Animal from "./animal.js";

export default class Perro extends Animal {

    constructor(nombre, edad, raza, color) {
        super(nombre, edad);
        this.raza = raza;
        this.color = color;
    }

    ladrar() {
        return `${this.nombre} ladrando...`;
    }
}