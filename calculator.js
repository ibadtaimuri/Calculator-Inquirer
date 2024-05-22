"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
function calculator(num1, operator, num2) {
    if (operator == '+') {
        return "Add: ".concat(num1 + num2);
    }
    else if (operator == '-') {
        return "Sub: ".concat(num1 - num2);
    }
    else if (operator == '*') {
        return "Multiply: ".concat(num1 * num2);
    }
    else {
        return "Divide: ".concat(num1 / num2);
    }
}
exports.calculator = calculator;
