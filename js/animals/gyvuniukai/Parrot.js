import { Bird } from '../Bird.js';

class Parrot extends Bird {
    constructor(name, color, wingsCount, reapeatSound, fly){
        super(name, color, wingsCount, reapeatSound, fly);

        this.sound = 'Hello?';
    }
}

export { Parrot }