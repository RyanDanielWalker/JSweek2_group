import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Weapon from '../src/js/weapon.js';
import Character from '../src/js/character.js'

let newCharacter = new Character("wizard", "dave");
console.log(newCharacter);

let newWeapon = new Weapon();
console.log(newWeapon);