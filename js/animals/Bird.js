import { Animal } from './Animals.js';

class Bird extends Animal {
    constructor(name, color) {
        super (name, color)
        this.wingsCount = 2;
        this.voice = 'hello puk';
        this.canFly = true;
    }
    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }
    fly() {
        console.log(`${this.name}: ${this.canFly ? 'flies away' : 'oops i can not fly' }`);
    }
}

export { Bird }