import { Pet } from '../Pet.js';

class Dog extends Pet {
    constructor(name, color, legsCount, likePlaying, walk){
        super(name, color, legsCount, likePlaying, walk);

        this.sound = 'au';
    }
}

export { Dog }