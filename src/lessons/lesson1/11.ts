const operationSum = function (number1: number, number2: number) {
    console.log(number1 + number2)
}
const operationMinus = function (number1: number, number2: number) {
    console.log(number1 - number2)
}
const operationMulti = function (number1: number, number2: number) {
    console.log(number1 * number2)
}
const operationDel = function (number1: number, number2: number) {
    console.log(number1 / number2)
}
function calc(number1: number, number2: number, operation: Function) {
    operation(number1, number2)
}

calc(1, 2, operationSum)
calc(1, 2, operationMinus)
calc(1, 2, operationMulti)
calc(1, 2, operationDel)