import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?"
        },
        {
            name: "Ameema",
            type: "confirm",
            message: "Do you want to add more?",
            default: "true"
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.Ameema;
    console.log(todos);
}
