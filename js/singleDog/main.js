import { SingleDog } from './singleDog/SingleDog.js';

const rexius = new SingleDog('Reksas', 'rudas', 'vokieciu aviganis');
const brisius = new SingleDog("Brisius", 'pilkas', 'lenciuginis');


console.log(rexius);
console.log(brisius);

rexius.introduce();
brisius.introduce();

rexius.move(5);
rexius.move(5);

rexius.addLovedPeople('Ignas');

/*

gyvunai kaip objektai turi:
-varda
-spalva
-veisle
-judejimo greitis = 0
    gali:
    -isleisti garsa
    -judeti

*/

