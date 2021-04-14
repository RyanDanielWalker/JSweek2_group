import { TestScheduler } from 'jest-cli'
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
})










