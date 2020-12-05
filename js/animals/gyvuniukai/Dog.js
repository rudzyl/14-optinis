import { Pet } from '../Pet.js';

class Dog extends Pet {
    constructor(name, color, legsCount, likePlaying, walk){
        super(name, color, legsCount, likePlaying, walk);

        this.voice = 'au';
        this.loyal = true;
        this.likesPlayingWithBall = true;
    }
}

export { Dog }