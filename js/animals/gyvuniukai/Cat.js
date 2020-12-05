import { Pet } from '../Pet.js';

class Cat extends Pet {
    constructor(name, color, legsCount, likePlaying, walk){
        super(name, color, legsCount, likePlaying, walk);

        this.voice = 'miau';
        
    }
}

export { Cat }