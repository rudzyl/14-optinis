import { Pet } from '../Pet.js';

class Rabbit extends Pet {
    constructor(name, color, legsCount, likePlaying, walk){
        super(name, color, legsCount, likePlaying, walk);

        this.voice = 'sup doc?';
    }
}

export { Rabbit }