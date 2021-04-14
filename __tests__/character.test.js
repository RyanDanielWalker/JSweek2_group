import { TestScheduler } from 'jest-cli'
import Character from '../src/js/character.js'

describe('Character', () => {
  test('should create a Character object with properties: health, name', () => {
    const newCharacter = new Character(wizard);
    expect(newCharacter).toEqual(wizard);
  })
})

