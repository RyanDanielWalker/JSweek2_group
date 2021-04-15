//Create a function that takes an array of numbers and returns the second largest number.

//create a constructor that will create an object 
//the object will hold an array of numbers
import Edabit from '../src/js/edabit.js'

describe('Edabit', () => {
  test('should return the second largest number in an array', () => {
    let edabit = new Edabit([2, 3, 7, 10, 6]);
    expect(edabit.findSecondLargest()).toEqual(7);
  })

  test('should convert minutes to seconds', () => {
    let edabit = new Edabit();
    let numberOfMinutes = 5;
    expect(edabit.convertMinutesToSeconds(numberOfMinutes)).toEqual(300);

  })

})