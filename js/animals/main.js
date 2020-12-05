import { Dog } from './gyvuniukai/Dog.js';
import { Cat } from './gyvuniukai/Cat.js';
import { Rabbit } from './gyvuniukai/Rabbit.js';
import { Chicken } from './gyvuniukai/Chicken.js';
import { Parrot } from './gyvuniukai/Parrot.js';
import { Sparrow } from './gyvuniukai/Sparrow.js';
import { Clownfish } from './gyvuniukai/Clownfish.js';
import { Goldfish } from './gyvuniukai/Goldfish.js';
import { Salmon } from './gyvuniukai/Salmon.js';

const suo = new Dog('Dzeris', 'black', 'four', 'fetch', 'fast');
const kate = new Cat('Luna', 'white', 'four', 'mice', 'zig-zag');
const triusis = new Rabbit('Hopkinsas', 'brown', 'four', 'sleep', 'hop');
const vista = new Chicken('Vistele', 'yellow');
const papuga = new Parrot('Kyra', 'green');
const zvirblis = new Sparrow('Jack', 'grey', 'two', 'Is captain Jack Sparrow', 'fly far');
const juruKlounas = new Clownfish('Nemo', 'orange', 'ten', 'through the ocean');
const auksineZuvele = new Goldfish('Goldie', 'gold', 'five', 'in circles');
const lasisa = new Salmon('Swen', 'silver', 'eight', 'up to waterfall');

suo.introduce();
suo.sound();

kate.introduce();
kate.sound();

triusis.introduce();
triusis.sound();


vista.sound();
vista.fly();


papuga.sound();
papuga.fly();
papuga.repeatSound('duok sausaini');


zvirblis.sound();

juruKlounas.introduce();
juruKlounas.voice();

auksineZuvele.introduce();
auksineZuvele.voice();

lasisa.introduce();
lasisa.voice();



