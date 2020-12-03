import { Fish } from '../Fish.js';

class Goldfish extends Fish {
    constructor (name, color, fin, swim) {
        super (name, color, fin, swim);

        this.sound = 'I dont remember my name';
    }
}

export { Goldfish }