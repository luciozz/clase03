import { Animal } from "./animal.js";

export default class Gato extends Animal {

    constructor(nombre, edad, raza, color) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.color = color;
        this.patas = 4
    }

    maullar() {
        return `${this.nombre} maullando...`;
    }
}