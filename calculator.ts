export function calculator(num1: number, operator: string, num2: number): number | string {
    if (operator == '+') {
        return `Add: ${num1 + num2}`
    } else if (operator == '-') {
        return `Sub: ${num1 - num2}`
    } else if (operator == '*') {
        return `Multiply: ${num1 * num2}`
    } else {
        return `Divide: ${num1 / num2}`
    }
}