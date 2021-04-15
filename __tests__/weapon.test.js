import Weapon from '../src/js/weapon.js';
describe('Weapon', () => {
  test('Should create a weapon object', () => {
    let newWeapon = new Weapon();
    expect(newWeapon).toEqual(true)
  })
})



// test('should subtract 10 from Character health', () => {
//   let character = new Character();
//   let newHealth;
//   character.health = newHealth;
//   character.drainHealth();
//   expect(character.health).toEqual(newHealth - 10);
// });