//THIS IS A CLASS
export default class Character {
  constructor(type, name, strength, health, weakness) {
    this.type = type;
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.weakness = weakness;
  }

  drainHealth() {
    this.health = this.health - 10;
  }

  attack() {
    this.strength = this.strength + 10;
  }

  getStats() {
    // `Your character is a ${this.type}, and their name is ${this.name}. They currently have ${this.strength} strength points and ${this.health} points. Be careful of ${this.weakness} because that is your weakness!`
  }
};




// let length = 2;
// let width = 3;
// let rectangleArea = `The area of a rectangle with length ${length} and width ${width} is ${length * width}.`;






