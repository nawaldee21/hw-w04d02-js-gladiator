'use strict';

import Arena from './arena.js';
import Gladiator from './gladiator.js';

const max = new Gladiator("Maximus","Trident");
const colosseum = new Arena("Colosseum");
const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Sword");


colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

 
