import { Animal } from './Animals.js';

class Fish extends Animal {
    constructor(name, color, fin, swim) {
        super (name, color)
        this.fin = fin;
        this.swim = swim;
    }
    introduce() {
        console.log(`Labas, as esu ${this.name} mano spalva ${this.color} as turiu ${this.fin} pelekus, as galiu plaukti ${this.swim}`);
    }
    voice() {
        console.log(`${this.name}: ${this.sound}`);
    }
}

export { Fish }