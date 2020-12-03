import { Fish } from '../Fish.js';

class Salmon extends Fish {
    constructor (name, color, fin, swim) {
        super (name, color, fin, swim);

        this.sound = 'I like sea';
    }
}

export { Salmon }