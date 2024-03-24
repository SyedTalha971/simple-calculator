#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter second Number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log(`your value is ${(answer.firstNumber + answer.secondNumber)}`);
} else if (answer.operator === "Substraction") {
  console.log(`your value is ${(answer.firstNumber - answer.secondNumber)}`);
} else if (answer.operator === "Multiplication") {
  console.log(`your value is ${(answer.firstNumber * answer.secondNumber)}`);
} else if (answer.operator === "Division") {
  console.log(`your value is ${(answer.firstNumber / answer.secondNumber)}`);
} else console.log("You Are Looser.!!");
