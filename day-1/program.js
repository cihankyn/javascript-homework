const mathService = require("../core/mathService");

let service = new mathService();
let result;

// Q-1 : Send multiple parameters as rest parameter then returns which ones of them are prime numbers?
// A-1
let arrOfNumbers = service.createArrayFromBetweenTwoNumbers(3, 50);
result = [...arrOfNumbers].filter((p) => {
  return service.checkIsPrimeNumber(p);
});

// Q-2 : Check 2 numbers are friend numbers or not
// A-2
result = service.checkAreFriendNumbers(220, 284); //true
result = service.checkAreFriendNumbers(4, 8); //false

// Q-3 : Find all perfect numbers between 0-1000
// A-3
arrOfNumbers = service.createArrayFromBetweenTwoNumbers(2, 1000);
result = [...arrOfNumbers].filter((p) => {
  return service.checIsPerfectNumber(p);
});

// Q-4 : Find all prime numbers between 2 and 1000
// A-4
result = [...arrOfNumbers].filter((p) => {
  return service.checkIsPrimeNumber(p);
});

console.log(result);
