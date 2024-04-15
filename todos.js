#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGreen.bold("Welcome To Our To-Do Application"));
let todos = ["AMEEMA", "SALEEM"];
// let todos = [] 
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what would you like to add in your todos?"
        },
        {
            name: "updatetodo",
            type: "confirm",
            message: "what would you like to add in your todos?",
            default: "true"
        }
    ]);
    todos.push(todoQuestions.todo);
    todos.push(todoQuestions.updatetodo);
    condition = todoQuestions;
    console.log(chalk.bgBlueBright.bold(todos)); //The loop is running on the based of this variable condition
}
;
