import UserComponent from "./components/userComponent.js";
import FirstDay from "./day-1/program.js";

const firstDay = new FirstDay();

let writeConsoleAnswerOfFirstDay = () => {
  console.log(firstDay.question_1());
  console.log(firstDay.question_2());
  console.log(firstDay.question_3());
  console.log(firstDay.question_4());
};
// writeConsoleAnswerOfFirstDay();

let userComponent = new UserComponent();
