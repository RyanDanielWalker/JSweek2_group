import Vehicle from '../src/js/vehicle.js';

describe('Vehicle', () => {
  test('Should create an new object', () => {
    let vehicle = new Vehicle();
    expect(vehicle).toEqual(true);
  })
});



