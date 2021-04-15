import Weapon from '../src/js/weapon.js';
describe('Weapon', () => {
  test('Should create a weapon object', () => {
    let newWeapon = new Weapon("ammo", "weaponCondition", "type");
    expect(newWeapon.ammo).toEqual("ammo");
  })

  test('Should add 5 to ammo whenever the function is called', () => {
    let newWeapon = new Weapon();
    let newAmmo = newWeapon.ammo;
    newWeapon.addAmmo();
    expect(newWeapon.ammo).toEqual(newAmmo + 5);
  })
})




