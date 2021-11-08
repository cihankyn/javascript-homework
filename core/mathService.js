export class MathService {
  constructor() {}

  getFactorialOfNumber = (number) => {
    let total = 1;
    for (let i = 1; i <= number; i++) {
      total *= i;
    }
    return total;
  };

  getFibonacciNumbers = (count) => {
    let start = 0;
    let end = 1;
    let numbers = [0, 1];
    let total = start + end;
    while (numbers.length < count) {
      numbers.push(total);
      start = end;
      end = total;
      total = start + end;
    }
    return numbers;
  };

  getDivisorsOfNumber = (number) => {
    let divisors = [];
    for (let i = 1; i <= number / 2 + 1; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  };

  checIsPerfectNumber = (number) => {
    if (isNaN(number)) {
      return false;
    }
    // return _math.sumFromArray(divisors.getAllDivisors(number)) === number;
    return this.sumNumbersFromArray(this.getDivisorsOfNumber(number)) == number;
  };

  checkAreFriendNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
      console.log("X or Y is not a number...");
      return;
    }
    let divisorsOfX = this.getDivisorsOfNumber(x);
    let divisorsOfY = this.getDivisorsOfNumber(y);
    let sumDivisorsOfX = this.sumNumbersFromArray(divisorsOfX);
    let sumDivisorsOfY = this.sumNumbersFromArray(divisorsOfY);
    if (sumDivisorsOfX === y && sumDivisorsOfY === x) {
      return true;
    }
    return false;
  };

  checkIsPrimeNumber = (number) => {
    // Returns true when number is prime
    let sqrt = Math.ceil(Math.sqrt(number));
    if (number < 2) {
      return false;
    }
    if (number == 2) {
      return true;
    }
    for (let i = 2; i <= sqrt; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  createArrayFromBetweenTwoNumbers = (start = 1, end = 100, increase = 1) => {
    let result = [];
    for (let i = start; i < end; i += increase) {
      result.push(i);
    }
    return result;
  };

  sumNumbersFromArray = (arr) => {
    return [...arr].reduce((acc, number) => {
      if (isNaN(number)) {
        return acc + 0;
      }
      return acc + number;
    }, 0);
  };
}
