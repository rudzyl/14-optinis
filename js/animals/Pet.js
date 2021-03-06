import { Animal } from './Animals.js';

class Pet extends Animal {
    constructor(name, color, legsCount, likePlaying, walk) {
        super (name, color)
        this.legsCount = legsCount;
        this.likePlaying = likePlaying;
        this.walk = walk;
        this.voice = 'miau au';
        this.loyal = false;
    }
    introduce() {
        console.log(`Labas, as esu ${this.name} mano spalva ${this.color} as sakau ${this.sound} as turiu ${this.legsCount} kojas, mano megstamiausias zaidimas ${this.likePlaying} man patinka eiti ${this.walk}`);
    }
    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }
}

export { Pet }