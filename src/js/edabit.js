export default class Edabit {

  constructor(numbers = []) {
    this.numbers = numbers;
  }

  findSecondLargest() {
    let answer = this.numbers.sort(function (a, b) { return b - a })[1];
    return answer
  }

  convertMinutesToSeconds(minutes) {
    let seconds = minutes * 60;
    return seconds;
    console.log(seconds);
  }


}
























