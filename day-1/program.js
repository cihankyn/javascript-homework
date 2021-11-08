import { MathService } from "../core/mathService.js";
const service = new MathService();

export class FirstDay {
  result = "";
  arrOfNumbers = [];

  question_1() {
    // Q-1 : Send multiple parameters as rest parameter then returns which ones of them are prime numbers?
    this.arrOfNumbers = service.createArrayFromBetweenTwoNumbers(3, 50);
    this.result = [...this.arrOfNumbers].filter((p) => {
      return service.checkIsPrimeNumber(p);
    });
    return `Answer(1) => ${this.result}`;
  }

  question_2() {
    // Q-2 : Check 2 numbers are friend numbers or not
    this.result = service.checkAreFriendNumbers(220, 284); //true
    this.result = service.checkAreFriendNumbers(4, 8); //false
    return `Answer(2) => ${this.result}`;
  }

  question_3() {
    // Q-3 : Find all perfect numbers between 0-1000
    // A-3
    this.arrOfNumbers = service.createArrayFromBetweenTwoNumbers(2, 1000);
    this.result = [...this.arrOfNumbers].filter((p) => {
      return service.checIsPerfectNumber(p);
    });
    return `Answer(3) => ${this.result}`;
  }

  question_4() {
    // Q-4 : Find all prime numbers between 2 and 1000
    this.result = [...this.arrOfNumbers].filter((p) => {
      return service.checkIsPrimeNumber(p);
    });
    return `Answer(4) => ${this.result}`;
  }
}
