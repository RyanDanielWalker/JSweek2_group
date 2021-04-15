import Vehicle from '../src/js/vehicle';

describe('Vehicle', () => {
  test('Should create a new object', () => {
    let vehicle = new Vehicle();
    expect(vehicle.name).toEqual("Tesla");
  });
});