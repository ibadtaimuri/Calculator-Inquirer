import inquirer from "inquirer";
import { calculator } from "./calculator.js";
let uI = await inquirer.prompt([
    {
        type: 'number',
        message: 'Enter a Number',
        name: 'n1'
    },
    {
        type: 'list',
        message: 'Select an Operator',
        name: 'op',
        choices: ['+', '-', '*', '/']
    },
    {
        type: 'number',
        message: 'Enter a Number',
        name: 'n2'
    }
])
console.log(calculator(uI.n1, uI.op, uI.n2))