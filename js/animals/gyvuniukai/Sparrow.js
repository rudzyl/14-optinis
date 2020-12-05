import { Bird } from '../Bird.js';

class Sparrow extends Bird {
    constructor(name, color, wingsCount, reapeatSound, fly){
        super(name, color, wingsCount, reapeatSound, fly);

        this.voice = 'cyp-cyp';
    }
}

export { Sparrow }