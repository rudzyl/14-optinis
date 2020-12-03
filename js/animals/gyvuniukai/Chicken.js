import { Bird } from '../Bird.js';

class Chicken extends Bird {
    constructor(name, color, wingsCount, reapeatSound, fly){
        super(name, color, wingsCount, reapeatSound, fly);

        this.sound = 'puk-pudak';
    }
}

export { Chicken }