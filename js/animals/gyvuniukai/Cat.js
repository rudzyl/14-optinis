import { Pet } from '../Pet.js';

class Cat extends Pet {
    constructor(name, color, legsCount, likePlaying, walk){
        super(name, color, legsCount, likePlaying, walk);

        this.sound = 'miau';
        
    }
}

export { Cat }