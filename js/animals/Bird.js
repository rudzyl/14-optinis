import { Animal } from './Animals.js';

class Bird extends Animal {
    constructor(name, color, wingsCount, repeatSound, fly) {
        super (name, color)
        this.wingsCount = wingsCount;
        this.repeatSound = repeatSound;
        this.fly = fly;
    }
    introduce() {
        console.log(`Labas, as esu ${this.name} mano spalva ${this.color} as sakau ${this.repeatSound} as turiu ${this.wingsCount} sparnus, as galiu ${this.fly}`);
    }
    voice() {
        console.log(`${this.name}: ${this.sound}`);
    }
}

export { Bird }