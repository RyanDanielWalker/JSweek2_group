export default class Weapon {
  constructor(ammo, weaponCondition, type) {
    this.ammo = ammo
    this.weaponCondition = weaponCondition
    this.type = type
  }

  addAmmo() {
    this.ammo = this.ammo + 5;
  }
}