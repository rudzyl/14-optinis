import { Fish } from '../Fish.js';

class Clownfish extends Fish {
    constructor (name, color, fin, swim) {
        super (name, color, fin, swim);

        this.sound = 'where is Nemo?';
    }
}

export { Clownfish }