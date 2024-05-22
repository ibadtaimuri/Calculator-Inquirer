"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var calculator_js_1 = require("./calculator.js");
var uI = await inquirer_1.default.prompt([
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
]);
console.log((0, calculator_js_1.calculator)(uI.n1, uI.op, uI.n2));
