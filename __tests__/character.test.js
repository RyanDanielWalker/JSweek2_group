//THIS IS A TEST FOR THE CLASS
import Character from '../src/js/character.js'

describe('Character', () => {
  test('should create a Character object with properties: type, name, strength, health, weakness', () => {
    let newCharacter = new Character("wizard", "sam", "archery", "100", "combat");

    expect(newCharacter.type).toEqual("wizard");
    expect(newCharacter.name).toEqual("sam");
    expect(newCharacter.strength).toEqual("archery");
    expect(newCharacter.health).toEqual("100");
    expect(newCharacter.weakness).toEqual("combat");
  })

  test('should subtract 10 from Character health', () => {
    let character = new Character();
    let newHealth;
    character.health = newHealth;
    character.drainHealth();
    expect(character.health).toEqual(newHealth - 10);
  });
  test('should add 10 to the character strength', () => {
    let character = new Character();
    let newStrength;
    character.strength = newStrength;
    character.attack();
    expect(character.strength).toEqual(newStrength + 10);
  });




});








