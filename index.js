import { FirstDay } from "./day-1/program.js";
const firstDay = new FirstDay();

let first_day_answer_one = document.getElementById("first_day_answer_one");
let first_day_answer_two = document.getElementById("first_day_answer_two");
let first_day_answer_three = document.getElementById("first_day_answer_three");
let first_day_answer_four = document.getElementById("first_day_answer_four");

first_day_answer_one.innerText = firstDay.question_1();
first_day_answer_two.innerText = firstDay.question_2();

console.log(firstDay.question_1());
console.log(firstDay.question_2());
console.log(firstDay.question_3());
console.log(firstDay.question_4());
